import React from 'react';
import { Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DoctorRegSuccessPopup({ show, onHide, regData }) {
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
          <h2 className='heading-3 mb-0 primaryColor'> Registration Successful </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-md-5 p-3 d-flex-cc flex-column'>
        <img src="/images/success_png.png" alt="success" className='mx-auto mb-3' style={{width: "150px"}} />
        <p className='text-center'> You have registered successfully to Fearless Against Rabies - Doctors Point </p>
        <p className='text-center fw-bold'> Your registration Id is </p>
        <p className='heading-3 secondaryColor fw-bold'> { regData !== null && regData.registrationId } </p>

        <Nav.Link href='/login'>
          <Button> Login </Button>
        </Nav.Link>
      </Modal.Body>
    </Modal>
  );
}


export default DoctorRegSuccessPopup