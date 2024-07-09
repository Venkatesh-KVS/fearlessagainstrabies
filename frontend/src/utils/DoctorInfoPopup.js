import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DoctorInfoPopup({ show, onHide, doctorDetails }) {
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
                    <h2 className='heading-3 mb-0 primaryColor'> Doctor Profile </h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-md-5 p-3'>
                {
                    doctorDetails.map((item, idx) => (
                        <div key={idx}>
                            <p> <span className='fw-bold'> Name : </span> {item.doctor_name} </p>
                            <p> <span className='fw-bold'> Mobile Number : </span> {item.mobile_number} </p>
                            <p> <span className='fw-bold'> Refister Id : </span> {item.regd_id} </p>
                            <p> <span className='fw-bold'> Email : </span> {item.email} </p>
                            <p> <span className='fw-bold'> Speciality : </span> {item.speciality} </p>
                        </div>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default DoctorInfoPopup