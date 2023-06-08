import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  const handelKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handelKeyDown);
    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, []);

  const handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={css.Overlay} onClick={handelBackdropClick}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
