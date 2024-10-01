import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    open,
    openModal,
    closeModal,
    handleModal,
  };
};

export default useModal;
