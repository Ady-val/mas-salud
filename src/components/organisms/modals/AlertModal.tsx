import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';

interface AlertModalProps {
  title?: string;
  message?: string | React.ReactNode;
  onClick?: () => void;
  onClose?: () => void;
}

const AlertModal = ({ title, message, onClick, onClose }: AlertModalProps) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    if (onClose) {
      onClose();

      return;
    }
    closeModal();
  };

  return (
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={handleClose} />
        <ModalButton text='Aceptar' color='danger' onClick={onClick} />
      </ModalFooter>
    </ModalContent>
  );
};

export default AlertModal;
