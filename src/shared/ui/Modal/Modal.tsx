import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import SM from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={SM.Overlay} onClick={onClose}>
      <div className={SM.Modal} onClick={(e) => e.stopPropagation()}>
        <button className={SM.Icon} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement, // Не забудьте создать элемент с id="modal-root" в index.html
  );
};

export default Modal;
