import { useState } from 'react';

export default function useModal() {
  // modal state for components (local) required
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [view, setView] = useState(false)

  const openModal = () => {
    //required
    setIsModalOpen(true);
  };

  const openView = () => {
    setView(true)
  }

  const closeView = () => {
    setView(false)
  }

  const editAction = <T,>(setterForm: (form: Partial<T>) => void, form: Partial<T>) => {
    //required
    openModal();
    +setIsEdit(true);
    setterForm({
      ...form
    });
  };

  const deleteAction = (message: string, id: string, setterId: (id: string) => void) => {
    //required
    setIsDeleted(!isDeleted);
    setterId(id);
    if (isDeleted === true) {
      setDeleteMessage('');
    } else {
      setDeleteMessage(message);
    }
  };

  const closeDelete = () => {
    setIsDeleted(false);
  };

  const cancel = (resetter: () => void) => {
    //required
    resetter();
    setIsModalOpen(false);
    setIsEdit(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    isDeleted,
    setIsDeleted,
    isEdit,
    setIsEdit,
    deleteMessage,
    setDeleteMessage,
    openModal,
    editAction,
    deleteAction,
    closeDelete,
    cancel,
    isLoading,
    setIsLoading,
    view,
    openView,
    closeView
  };
}
