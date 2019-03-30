import React from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = props => {
  const { isOpen, children } = props;
  const rootEl = document.getElementById('outer-root');

  return isOpen
    ? createPortal(<div className="Modal">{children}</div>, rootEl)
    : null;
};

export default Modal;
