'use client';

import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HUsers } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { Modules } from '@mas-salud/enum/modules';
import { useUsers } from '@mas-salud/hooks/users/useUsers';
import { useToast } from '@mas-salud/hooks/useToast';
import { useHasModulePermissions } from '@mas-salud/store/slices/permissions';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import ProfileFormModal from './ProfileFormModal';
import ProfileDeleteAlertModal from './ProfileDeleteAlertModal';

const UsersData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const can = useHasModulePermissions(Modules.Users);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useUsers({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar usuario, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const onView = (value: any) => {
    openModal(<ProfileFormModal onlyView={true} obj={value} />);
  };

  const onEdit = (value: any) => {
    if (!can.update) {
      errorToast(`Acceso denegado`, `No tienes permisos para editar usuarios`);

      return;
    }
    openModal(<ProfileFormModal obj={value} />);
  };

  const onDelete = (value: any) => {
    if (!can.delete) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para eliminar usuarios`,
      );

      return;
    }
    openModal(<ProfileDeleteAlertModal obj={value} />);
  };

  return (
    <SimpleTable
      headers={HUsers({
        onView,
        onEdit,
        onDelete,
      })}
      data={fetchedData?.data || []}
      count={fetchedData?.count || 0}
      rowsPerPage={siteConfig.queries.defaultLimit}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={(page: number) => setCurrentPage(page)}
      onSelectionChange={() => {}}
    />
  );
};

export default UsersData;
