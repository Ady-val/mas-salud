import { FormModalProps } from '@mas-salud/interfaces/formModalProps';
import { IUser, IUserForm } from '@mas-salud/interfaces/users';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import {
  ModalButton,
  ModalInput,
  SimpleSelect,
} from '@mas-salud/components/molecules';
import { useToast } from '@mas-salud/hooks/useToast';
import { useModal } from '@mas-salud/context/ModalContext';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '@mas-salud/schemas/userSchema';
import { useEffect, useState } from 'react';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { useRoleOptions } from '@mas-salud/hooks/roles/useRolesOptions';
import { useUserMutation } from '@mas-salud/hooks/users/useUserMutate';
import { useQueryClient } from '@tanstack/react-query';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';

const ProfileFormModal = ({ onlyView, obj }: FormModalProps<IUser>) => {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>();
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<
    string | null
  >();
  const {
    data: institutionsFetchedData,
    error: institutionsError,
    isFetching: institutionsIsFetching,
  } = useInstitutions();
  const {
    data: rolesFetchedData,
    error: rolesError,
    isFetching: rolesIsFetching,
  } = useRoleOptions();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: obj?.name,
      username: obj?.username,
      institutionId: obj?.institutionId,
      roleId: obj?.roleId,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const mutation = useUserMutation();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (institutionsError) {
      errorToast(
        'Error al cargar las instituciones, por favor recargue la página.',
      );
    }
    if (rolesError) {
      errorToast('Error al cargar los roles, por favor recargue la página.');
    }
  }, [institutionsError, rolesError, errorToast]);

  const handleSave = (data: IUserForm) => {
    if (passwordError || passwordConfirmationError) {
      return;
    }
    showLoading();
    mutation.mutate(
      {
        ...(obj?.id ? { id: obj.id } : {}),
        ...data,
      },
      {
        onError: (error) => {
          const formatedError = errorFormat(error);

          formatedError.forEach((err: { field: string; error: string }) =>
            setError(err.field as keyof IUserForm, {
              type: 'server',
              message: err.error,
            }),
          );
          errorToast('Error', formatedError[0].error);
        },
        onSuccess: () => {
          successToast('Usuario guardado correctamente.');
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.USERS],
          });
          closeModal();
        },
        onSettled: () => {
          hideLoading();
        },
      },
    );
  };

  return (
    <ModalContent>
      <form onSubmit={handleSubmit(handleSave)}>
        <ModalHeader>
          {onlyView ? 'Perfil' : obj?.id ? 'Editar perfil' : 'Crear perfil'}
        </ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-2 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Nombre'
              placeholder='Nombre del usuario'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Username'
              placeholder='Usuario para iniciar sesión'
              {...register('username')}
              isInvalid={!!errors.username}
              errorMessage={errors.username?.message}
            />
            <SimpleSelect
              isDisabled={onlyView}
              label='Institución'
              placeholder='Selecciona una institución'
              defaultSelectedKeys={[obj?.institutionId as string]}
              options={formatOptions(institutionsFetchedData)}
              onChange={({ target }) => {
                setValue('institutionId', target.value);
              }}
              isInvalid={!!errors.institutionId}
              errorMessage={errors.institutionId?.message}
              isLoading={institutionsIsFetching}
            />
            <SimpleSelect
              isDisabled={onlyView}
              label='Rol'
              placeholder='Selecciona un rol'
              defaultSelectedKeys={[obj?.roleId as string]}
              options={formatOptions(rolesFetchedData)}
              onChange={({ target }) => {
                setValue('roleId', target.value);
              }}
              isInvalid={!!errors.roleId}
              errorMessage={errors.roleId?.message}
              isLoading={rolesIsFetching}
            />
          </div>
          {!onlyView && (
            <div className='flex flex-col w-1/2 gap-4'>
              <ModalInput
                label='Contraseña'
                placeholder='Ingrese una contraseña de al menos 8 caracteres'
                type='password'
                isInvalid={!!passwordError}
                errorMessage={passwordError}
                onChange={({ target }) => {
                  setPassword(target.value);
                  if (target.value.length < 8) {
                    setPasswordError(
                      'La contraseña debe tener al menos 8 caracteres',
                    );
                  } else {
                    setPasswordError(null);
                    setValue('password', password);
                  }
                }}
              />
              <ModalInput
                label='Confirmar Contraseña'
                placeholder='Confirme la contraseña'
                type='password'
                isInvalid={!!passwordConfirmationError}
                errorMessage={passwordConfirmationError}
                onChange={({ target }) => {
                  if (target.value !== password) {
                    setPasswordConfirmationError(
                      'Las contraseñas no coinciden',
                    );
                    setValue('password', '');
                  } else {
                    setPasswordConfirmationError(null);
                    setValue('password', password);
                  }
                }}
              />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalButton
            text={onlyView ? 'Cerrar' : 'Cancelar'}
            color='secondary'
            onClick={closeModal}
          />
          {!onlyView && (
            <ModalButton text='Guardar' color='success' type='submit' />
          )}
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default ProfileFormModal;
