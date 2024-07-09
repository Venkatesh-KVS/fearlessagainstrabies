import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ContactUsFormSumbitPopup({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className='heading-3 mb-0 primaryColor'> Form Submitted Successfully! </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-md-5 p-3 d-flex-cc flex-column'>
        <img src="/images/success_png.png" alt="success" className='mx-auto mb-3' style={{width: "150px"}} />
        <p className='text-center'> Thank you for submitting your query. Your query has been saved and we'll try to get onto to you as soon as possible </p>
      </Modal.Body>
    </Modal>
  );
}


export default ContactUsFormSumbitPopup