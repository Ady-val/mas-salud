'use client';

import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HSpecialist } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { Modules } from '@mas-salud/enum/modules';
import { useMedicalSpecialists } from '@mas-salud/hooks/medicalSpecialists/useMedicalSpecialists';
import { useToast } from '@mas-salud/hooks/useToast';
import { useMedicalSpecialistsFilters } from '@mas-salud/store/slices/medicalSpecialist';
import { useHasModulePermissions } from '@mas-salud/store/slices/permissions';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import MedicalSpecialistFormModal from './MedicalSpecialistFormModal';
import { IMedicalSpecialist } from '@mas-salud/interfaces/medicalSpecialists';
import MedicalSpecialistDeleteAlertModal from './MedicalSpecialistDeleteAlertModal';

const MedicalSpecialistsData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const { fullName, specialty, institutionId } = useMedicalSpecialistsFilters();
  const [currentPage, setCurrentPage] = useState(1);
  const can = useHasModulePermissions(Modules.MedicalSpecialists);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useMedicalSpecialists({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
    fullName: fullName || undefined,
    specialty: specialty || undefined,
    institutionId: institutionId || undefined,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar beneficiarios, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const onView = (value: any) => {
    console.log(value);
    openModal(
      <MedicalSpecialistFormModal
        onlyView={true}
        obj={value as IMedicalSpecialist}
      />,
    );
  };

  const onEdit = (value: any) => {
    if (!can.update) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para editar especialistas médicos`,
      );

      return;
    }
    openModal(<MedicalSpecialistFormModal obj={value as IMedicalSpecialist} />);
  };

  const onDelete = (value: any) => {
    if (!can.delete) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para eliminar especialistas médicos`,
      );

      return;
    }
    openModal(
      <MedicalSpecialistDeleteAlertModal obj={value as IMedicalSpecialist} />,
    );
  };

  return (
    <SimpleTable
      headers={HSpecialist({
        onView,
        onEdit,
        onDelete,
      })}
      data={fetchedData?.data || []}
      count={fetchedData?.count || 0}
      rowsPerPage={siteConfig.queries.defaultLimit}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export default MedicalSpecialistsData;
