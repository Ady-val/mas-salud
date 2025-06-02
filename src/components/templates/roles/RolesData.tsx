import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HRoles } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { Modules } from '@mas-salud/enum/modules';
import { useRoles } from '@mas-salud/hooks/roles/useRoles';
import { useToast } from '@mas-salud/hooks/useToast';
import { useHasModulePermissions } from '@mas-salud/store/slices/permissions';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import RoleFormModal from './RoleFormModal';
import RoleDeleteAlertModal from './RoleDeleteAlertModal';

const RolesData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const can = useHasModulePermissions(Modules.Roles);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useRoles({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar rol, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const onView = (value: any) => {
    openModal(<RoleFormModal onlyView={true} obj={value} />);
  };

  const onEdit = (value: any) => {
    if (!can.update) {
      errorToast(`Acceso denegado`, `No tienes permisos para editar roles`);

      return;
    }
    openModal(<RoleFormModal obj={value} />);
  };

  const onDelete = (value: any) => {
    if (!can.delete) {
      errorToast(`Acceso denegado`, `No tienes permisos para eliminar roles`);

      return;
    }
    openModal(<RoleDeleteAlertModal obj={value} />);
  };

  return (
    <SimpleTable
      headers={HRoles({
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

export default RolesData;
