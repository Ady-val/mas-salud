import { ModalContent, ModalFooter } from '@heroui/modal';
import {
  Checkbox,
  CheckboxGroup,
  ModalBody,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton, ModalInput } from '@mas-salud/components/molecules';
import { ModulesNames } from '@mas-salud/constants/modules';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { useRoleMutation } from '@mas-salud/hooks/roles/useRolesMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { FormModalProps } from '@mas-salud/interfaces/formModalProps';
import { IPermissions, IRole } from '@mas-salud/interfaces/roles';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const RoleFormModal = ({ onlyView, obj }: FormModalProps<IRole>) => {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const [name, setName] = useState<string>(obj?.name || '');
  const [permissions, setPermissions] = useState<IPermissions[]>(
    obj?.permissions || [],
  );
  const mutation = useRoleMutation();
  const queryClient = useQueryClient();

  const getPermission = (moduleName: string): IPermissions | undefined => {
    return permissions.find((perm) => perm.module === moduleName);
  };

  const handleChangePermissions = (moduleName: string, actions: string[]) => {
    const updatedPermissions = [...permissions];
    const modulePermissionsIndex = updatedPermissions.findIndex(
      (perm) => perm.module === moduleName,
    );

    if (actions.length === 0) {
      if (modulePermissionsIndex > -1) {
        updatedPermissions.splice(modulePermissionsIndex, 1);
      }
      setPermissions(updatedPermissions);

      return;
    }

    if (modulePermissionsIndex > -1) {
      updatedPermissions[modulePermissionsIndex].actions = actions;
    } else {
      updatedPermissions.push({
        module: moduleName,
        isGlobal: false,
        actions: actions,
      });
    }

    setPermissions(updatedPermissions);
  };

  const handleChangeGlobalPermission = (
    moduleName: string,
    isGlobal: boolean,
  ) => {
    const updatedPermissions = [...permissions];
    const modulePermissionsIndex = updatedPermissions.findIndex(
      (perm) => perm.module === moduleName,
    );

    if (modulePermissionsIndex > -1) {
      updatedPermissions[modulePermissionsIndex].isGlobal = isGlobal;
    } else {
      errorToast(
        'Error',
        `Primero tienes que seleccionar al menos una acción para el módulo.`,
      );
    }

    setPermissions(updatedPermissions);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (permissions.length === 0) {
      errorToast('Error', `Debes seleccionar al menos una acción para el rol.`);

      return;
    }

    if (name.trim() === '') {
      errorToast('Error', `El nombre del rol no puede estar vacío.`);

      return;
    }

    showLoading();
    mutation.mutate(
      {
        id: obj?.id,
        name,
        permissions,
      },
      {
        onSuccess: () => {
          hideLoading();
          successToast(
            'Éxito',
            `Rol ${obj?.id ? 'editado' : 'creado'} correctamente.`,
          );
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.ROLES],
          });
          closeModal();
        },
        onError: (error) => {
          errorToast(
            'Error',
            `No se pudo ${obj?.id ? 'editar' : 'crear'} el rol.`,
          );
          console.log(error);
        },
        onSettled: () => {
          hideLoading();
        },
      },
    );
  };

  return (
    <ModalContent>
      <form onSubmit={handleSave}>
        <ModalHeader>
          {onlyView ? 'Rol' : obj?.id ? 'Editar rol' : 'Crear rol'}
        </ModalHeader>
        <ModalBody>
          <ModalInput
            isReadOnly={onlyView}
            isRequired
            label='Nombre'
            placeholder='Nombre del Rol'
            value={name}
            onChange={(e) => setName(e.target.value)}
            // isInvalid={!!errors.name}
            // errorMessage={errors.name?.message}
          />
          <div className='flex flex-col bg-white text-content rounded-lg p-2 gap-2'>
            {ModulesNames.map((systemModule) => {
              return (
                <div
                  key={systemModule.value}
                  className='flex gap-1 p-2 items-center bg-gray-100 hover:bg-blue-200 rounded-sm'
                >
                  <div className='w-[30%]'>{systemModule.label}</div>
                  <div className='w-[55%]'>
                    <CheckboxGroup
                      isReadOnly={onlyView}
                      orientation='horizontal'
                      value={getPermission(systemModule.value)?.actions || []}
                      onChange={(values) => {
                        handleChangePermissions(
                          systemModule.value,
                          values as string[],
                        );
                      }}
                    >
                      <Checkbox color='primary' value='read'>
                        Ver
                      </Checkbox>
                      <Checkbox color='success' value='create'>
                        Crear
                      </Checkbox>
                      <Checkbox color='warning' value='update'>
                        Actualizar
                      </Checkbox>
                      <Checkbox color='danger' value='delete'>
                        Eliminar
                      </Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div className='w-[15%] flex justify-end'>
                    <Checkbox
                      color='secondary'
                      isReadOnly={onlyView}
                      isSelected={
                        getPermission(systemModule.value)?.isGlobal || false
                      }
                      onChange={(e) => {
                        handleChangeGlobalPermission(
                          systemModule.value,
                          e.target.checked,
                        );
                      }}
                    >
                      Global
                    </Checkbox>
                  </div>
                </div>
              );
            })}
          </div>
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

export default RoleFormModal;
