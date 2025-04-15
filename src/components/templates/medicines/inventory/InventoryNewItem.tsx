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
import DatePickerInput from '@mas-salud/components/molecules/inputs/DatePickerInput';
import ModalInfoField from '@mas-salud/components/molecules/modals/ModalInfoFields';
import { ModalTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HMedicineProductsModal } from '@mas-salud/constants/headers';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { useNewInventoryItem } from '@mas-salud/hooks/inventory/useInventory';
import { useProducts } from '@mas-salud/hooks/products/useProducts';
import { useToast } from '@mas-salud/hooks/useToast';
import { INewInventoryItem } from '@mas-salud/interfaces/inventory';
import { inventoryItemSchema } from '@mas-salud/schemas/inventoryItemSchema';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSistrix } from 'react-icons/fa6';

export default function InventoryNewItem({}) {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const queryClient = useQueryClient();
  const [name, setName] = useState<string | undefined>(undefined);
  const {
    data: institutionsFetchedData,
    error: institutionsError,
    isFetching: institutionsIsFetching,
  } = useInstitutions();
  const {
    data: fetchedData,
    error,
    isFetching,
  } = useProducts({
    page: currentPage,
    limit: siteConfig.queries.modalLimit,
    name: name || undefined,
  });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors: formErrors },
  } = useForm<INewInventoryItem>({
    resolver: yupResolver(inventoryItemSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const { mutate } = useNewInventoryItem();

  useEffect(() => {
    if (institutionsError) {
      errorToast(
        'Error al cargar las instituciones, por favor recargue la página.',
      );
    }
    if (error) {
      errorToast(
        'Error al cargar los medicamentos, por favor recargue la página.',
      );
    }
  }, [institutionsError, errorToast]);

  const handleSave = (data: INewInventoryItem) => {
    showLoading();
    mutate(data, {
      onError: (error) => {
        const formatedError = errorFormat(error);

        formatedError.forEach((err: { field: string; error: string }) =>
          setError(err.field as keyof INewInventoryItem, {
            type: 'server',
            message: err.error,
          }),
        );
        errorToast('Error', formatedError[0].error);
      },
      onSuccess: () => {
        successToast('Entrada de inventario guardada correctamente.');
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.INVENTORIES],
        });
        closeModal();
      },
      onSettled: () => {
        hideLoading();
      },
    });
  };

  const handleSelectionChange = (key: string | null) => {
    if (!key) {
      setSelectedItem(null);
      setValue('productId', '');

      return;
    }

    const selected = fetchedData?.data.find(
      (item: { id: string }) => item.id === key,
    );

    if (selected) {
      setValue('productId', selected.id);
      setSelectedItem({
        id: selected.id,
        name:
          selected.name +
          ' - ' +
          selected.brand +
          ' - ' +
          selected.dosage +
          selected.unit +
          ' - ' +
          selected.form,
      });
    }
  };

  return (
    <ModalContent>
      <form onSubmit={handleSubmit(handleSave)}>
        <ModalHeader>Nueva Entrada de Inventario</ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-3 gap-x-3 gap-y-5'>
            <ModalInfoField
              label='Medicamento Seleccionado'
              value={selectedItem?.name || ''}
              description='Seleccione un medicamento en la tabla para agregar al inventario'
              classNames={{ layout: 'col-span-full', value: 'border-b-2' }}
            />
            <ModalInput
              isRequired
              label='Número de Lote'
              placeholder='Número de lote del medicamento'
              {...register('batchNumber')}
              isInvalid={!!formErrors.batchNumber}
              errorMessage={formErrors.batchNumber?.message}
              className='col-span-1'
            />
            <ModalInput
              isRequired
              label='Código de Barras'
              placeholder='Código de barras del medicamento'
              {...register('barcode')}
              isInvalid={!!formErrors.barcode}
              errorMessage={formErrors.barcode?.message}
              className='col-span-1'
            />
            <ModalInput
              isRequired
              type='number'
              label='Cantidad'
              placeholder='Cantidad del medicamento'
              {...register('quantity')}
              isInvalid={!!formErrors.quantity}
              errorMessage={formErrors.quantity?.message}
              className='col-span-1'
            />
            <SimpleSelect
              label='Institución'
              placeholder='Institución a la que pertenecerá el medicamento'
              options={formatOptions(institutionsFetchedData)}
              onChange={({ target }) => {
                setValue('institutionId', target.value);
              }}
              isInvalid={!!formErrors.institutionId}
              errorMessage={formErrors.institutionId?.message}
              isLoading={institutionsIsFetching}
              className='col-span-2'
            />
            <DatePickerInput
              isRequired
              label='Fecha de Vencimiento'
              onChange={(date) => {
                setValue('expirationDate', date?.toString() || '');
              }}
              isInvalid={!!formErrors.expirationDate}
              errorMessage={formErrors.expirationDate?.message}
              className='col-span-1'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <ModalInput
              label='Buscar Medicamento'
              placeholder='Nombre del medicamento'
              onChange={({ target }) => setName(target.value)}
              startContent={<FaSistrix />}
            />
            <ModalTable
              headers={HMedicineProductsModal()}
              data={fetchedData?.data || []}
              count={fetchedData?.count || 0}
              rowsPerPage={siteConfig.queries.modalLimit}
              currentPage={currentPage}
              isLoading={isFetching}
              onPageChange={(page: number) => setCurrentPage(page)}
              onSelectionChange={handleSelectionChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
          <ModalButton text='Guardar' color='success' type='submit' />
        </ModalFooter>
      </form>
    </ModalContent>
  );
}
