import { yupResolver } from '@hookform/resolvers/yup';
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
import { formOptions } from '@mas-salud/constants/optinos/formOptions';
import { unitOptions } from '@mas-salud/constants/optinos/unitOptions';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { EProductForm, EProductUnit } from '@mas-salud/enum/products';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useProductMutation } from '@mas-salud/hooks/products/useProductMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { FormModalProps } from '@mas-salud/interfaces/formModalProps';
import { IProduct } from '@mas-salud/interfaces/products';
import { productSchema } from '@mas-salud/schemas/productsSchema';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export default function ProductsFormModal({
  onlyView,
  obj,
}: FormModalProps<IProduct>) {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(productSchema),
    defaultValues: { ...obj },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const mutation = useProductMutation();
  const queryClient = useQueryClient();

  const handleSave = (data: IProduct) => {
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
            setError(err.field as keyof IProduct, {
              type: 'server',
              message: err.error,
            }),
          );
          errorToast('Error', formatedError[0].error);
        },
        onSuccess: () => {
          successToast('Beneficiario guardado correctamente.');
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.PRODUCTS],
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
        <ModalHeader>Nuevo Medicamento</ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-6 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Nombre'
              placeholder='Nombre del medicamento'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              className='col-span-6 md:col-span-3'
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Marca'
              placeholder='Nombre del la marca'
              {...register('brand')}
              isInvalid={!!errors.brand}
              errorMessage={errors.brand?.message}
              className='col-span-6 md:col-span-3'
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Dosis'
              placeholder='Dosis del medicamento'
              {...register('dosage')}
              isInvalid={!!errors.dosage}
              errorMessage={errors.dosage?.message}
              className='col-span-3 md:col-span-2'
            />
            <SimpleSelect
              isDisabled={onlyView}
              label='Forma'
              placeholder='Forma farmacéutica'
              defaultSelectedKeys={[obj?.form as string]}
              options={formOptions}
              onChange={({ target }) => {
                setValue('form', target.value as EProductForm);
              }}
              isInvalid={!!errors.form}
              errorMessage={errors.form?.message}
              className='col-span-3 md:col-span-2'
            />
            <SimpleSelect
              isDisabled={onlyView}
              label='Unidad'
              placeholder='Unidad de medida'
              defaultSelectedKeys={[obj?.unit as string]}
              options={unitOptions}
              onChange={({ target }) => {
                setValue('unit', target.value as EProductUnit);
              }}
              isInvalid={!!errors.unit}
              errorMessage={errors.unit?.message}
              className='col-span-3 md:col-span-2'
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Presentación'
              placeholder='Presentación del medicamento'
              {...register('presentation')}
              isInvalid={!!errors.presentation}
              errorMessage={errors.presentation?.message}
              className='col-span-6 md:col-span-4'
            />
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
}
