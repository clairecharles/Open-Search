import ReactModal from "react-modal";
import { useState } from "react";

const Modal = ({ showModal, setShowModal, content }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <button onClick={handleCloseModal}>Close Modal</button>
      {content}
    </ReactModal>
  );
};

export default Modal;
