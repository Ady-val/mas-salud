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
}

const AlertModal = ({ title, message, onClick }: AlertModalProps) => {
  const { closeModal } = useModal();

  return (
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
        <ModalButton text='Aceptar' color='danger' onClick={onClick} />
      </ModalFooter>
    </ModalContent>
  );
};

export default AlertModal;
