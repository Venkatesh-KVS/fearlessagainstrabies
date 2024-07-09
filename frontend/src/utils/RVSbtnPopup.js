import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import VaccineSchedulesWrpr from '../components/VaccineSchedulesWrpr';
// import Button from 'react-bootstrap/Button';

function RVSbtnPopup({ show, onHide, selectedDate, scheduleDates, mobileNumber }) {
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
          <h2 className='heading-3 mb-0 primaryColor'> Thank Your for Registering </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-md-5 p-3 d-flex-cc flex-column'>
        <img src="/images/success_png.png" alt="success" className='mx-auto mb-3' style={{width: "150px"}} />
        <p className='text-center'> Based on 1st dose date your remanining 4 doses dates are scheduled as below, You'll get notified for your next dose 1 day before </p>
        {/* <hr />
        { scheduleDates && <VaccineSchedulesWrpr scheduleDates={scheduleDates} mobileNumber={mobileNumber} /> } */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


export default RVSbtnPopup