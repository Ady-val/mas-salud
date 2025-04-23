'use client';

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton, ModalInput } from '@mas-salud/components/molecules';
import ModalInfoField from '@mas-salud/components/molecules/modals/ModalInfoFields';
import { ModalTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import {
  HBeneficiariesModal,
  HBeneficiaryHistoryModal,
} from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { useBeneficiaries } from '@mas-salud/hooks/beneficiaries/useBeneficiaries';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { useEffect, useRef, useState } from 'react';
import { FaSistrix } from 'react-icons/fa6';

const SelectBenficiaryModal = ({
  onBeneficiarySelected,
}: {
  onBeneficiarySelected: (beneficiary: IBeneficiary | null) => void;
}) => {
  const { closeModal } = useModal();
  const [step, setStep] = useState(1);
  const [selectedBeneficiary, setSelectedBeneficiary] =
    useState<IBeneficiary | null>(null);

  const handleNext = () => {
    if (step === 1) {
      if (!selectedBeneficiary) return;
      setStep(2);
    } else {
      onBeneficiarySelected(selectedBeneficiary);
      closeModal();
    }
  };

  return (
    <ModalContent>
      <ModalHeader>Seleccionar Beneficiario</ModalHeader>
      <ModalBody>
        <ModalInfoField
          label='Beneficiario Seleccionado'
          value={
            selectedBeneficiary?.name
              ? `${selectedBeneficiary.name} ${selectedBeneficiary.lastName} ${selectedBeneficiary.secondLastName}`
              : ''
          }
          description='Seleccione un beneficiario de la lista'
          classNames={{ value: 'border-b-2' }}
        />
      </ModalBody>
      {step === 1 && (
        <FindAndSelectBeneficiary
          onSelectBeneficiary={(beneficiary) => {
            setSelectedBeneficiary(beneficiary);
          }}
        />
      )}
      {step === 2 && selectedBeneficiary && (
        <BeneficiaryInfo beneficiary={selectedBeneficiary} />
      )}
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
        <ModalButton
          text={step === 1 ? 'Siguiente' : 'Guardar'}
          color='success'
          type='submit'
          onClick={handleNext}
        />
      </ModalFooter>
    </ModalContent>
  );
};

const FindAndSelectBeneficiary = ({
  onSelectBeneficiary,
}: {
  onSelectBeneficiary: (beneficiary: IBeneficiary | null) => void;
}) => {
  const [beneficiaryCode, setBeneficiaryCode] = useState<string>('');
  const [identificationCode, setIdentificationCode] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useBeneficiaries({
    page: currentPage,
    limit: siteConfig.queries.modalLimit,
    identificationCode: identificationCode || undefined,
  });

  const handleSelectionChange = (selectedItem: any) => {
    if (!fetchedData?.data || fetchedData?.data.length === 0) {
      onSelectBeneficiary(null);
    }

    const beneficiary = fetchedData?.data.find(
      (item: IBeneficiary) => item.id === selectedItem,
    );

    onSelectBeneficiary(beneficiary || null);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && beneficiaryCode.trim()) {
      setIdentificationCode(beneficiaryCode.trim());
      setBeneficiaryCode('');
    }
  };

  return (
    <div className='flex flex-col gap-4 px-6'>
      <ModalInput
        ref={inputRef}
        label='Buscar Beneficiario'
        placeholder="Buscar por cédula y presiona 'Enter'"
        value={beneficiaryCode}
        onChange={({ target }) => setBeneficiaryCode(target.value)}
        onKeyDown={handleInputKeyDown}
        startContent={<FaSistrix />}
      />
      <ModalTable
        headers={HBeneficiariesModal()}
        data={fetchedData?.data || []}
        count={fetchedData?.count || 0}
        rowsPerPage={siteConfig.queries.modalLimit}
        currentPage={currentPage}
        isLoading={isFetching}
        onPageChange={(page: number) => setCurrentPage(page)}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

const BeneficiaryInfo = ({ beneficiary }: { beneficiary: IBeneficiary }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='grid grid-cols-2 gap-3 px-6 text-white'>
      <ModalInfoField
        label='CURP'
        value={beneficiary.curp}
        classNames={{ layout: 'col-span-1' }}
      />
      <ModalInfoField
        label='Teléfono'
        value={beneficiary.phone}
        classNames={{ layout: 'col-span-1' }}
      />
      <ModalInfoField
        label='Dirección'
        value={`${beneficiary.street} ${beneficiary.externalNumber} ${beneficiary?.internalNumber ?? ''} C.P. ${beneficiary.colony} ${beneficiary.postalCode}`}
        classNames={{ layout: 'col-span-full' }}
      />
      <div className='col-span-full'>
        <ModalTable
          headers={HBeneficiaryHistoryModal()}
          data={[]}
          count={0}
          // data={fetchedData?.data || []}
          // count={fetchedData?.count || 0}
          rowsPerPage={siteConfig.queries.modalLimit}
          currentPage={currentPage}
          // isLoading={isFetching}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default SelectBenficiaryModal;
