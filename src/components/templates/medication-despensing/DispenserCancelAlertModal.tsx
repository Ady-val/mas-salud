import { AlertModal } from '@mas-salud/components/organisms';

const DispenserCancelAlertModal = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <AlertModal
      title='Cancelar dispensación'
      message={<div>¿Está seguro de que desea cancelar este ticket?</div>}
      onClick={onCancel}
    />
  );
};

export default DispenserCancelAlertModal;
