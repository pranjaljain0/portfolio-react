import React from "react";
import { Modal } from "react-bootstrap";
import Pranjal_jain_CV from "../Downloadables/Pranjal_Jain_CV.pdf";

function ResumeModal({ showResumeModal, closeModal }) {
  return (
    <Modal
      size="lg"
      show={showResumeModal}
      onHide={closeModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://pranjaljain0.github.io/pranjaljain0/Pranjal_Jain_CV.pdf#toolbar=0"
          width="100%"
          height="700px"
          frameborder="0"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

export default ResumeModal;
