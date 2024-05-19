export interface ModalDeleteProps {
    title: string;
    message: string;
    isLoading?: boolean;
    setModalOpen?: () => void;
    deleteHandler?: () => void;
  }
  
  export interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalOpen: boolean;
    children: React.ReactNode;
  }
  