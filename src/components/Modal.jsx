import React from "react";

function Modal({ isOpen, children, onClick }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClick}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
