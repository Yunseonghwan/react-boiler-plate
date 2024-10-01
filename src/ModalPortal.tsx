import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const rootElement = document.getElementById('modal-root') as HTMLElement;

  return createPortal(children, rootElement);
};

export default ModalPortal;
