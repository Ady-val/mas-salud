import {
  ModalBody,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/atoms';
import { useModal } from '@/context/ModalContext';

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
