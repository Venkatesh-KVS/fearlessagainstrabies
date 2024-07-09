import React, { useState } from 'react';
import styled from "styled-components";
import DoctorsRegisterForm from './DoctorsRegisterForm';
import { Nav } from 'react-bootstrap';
import DoctorRegSuccessPopup from '../utils/DoctorRegSuccessPopup';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [showPopup, setShowPopup] = useState(false);
  const [regData, setregData] = useState(null);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className=" pageBanner"></div>

      <div className="container p-4">
        <div className="doctorsLoginBox mx-auto shadow rounded-4 p-md-5 p-4 mt-md-5">
          <h2 className="heading-2 mb-0 secondaryColor text-center"> Register </h2>
          <DoctorsRegisterForm setregData={setregData} setShowPopup={setShowPopup} />
          
          <Nav.Link href="/login" className='mt-4 text-center'> <span className='primaryColor'> Login </span> </Nav.Link>
        </div>

      </div>

      <DoctorRegSuccessPopup
        show={showPopup}
        regData={regData}
        onHide={() => {
            setShowPopup(false);
            setTimeout(() => { navigate('/login') }, 700);
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
.pageBanner {
  height: 48vh;
  background-image: url("./images/banner/login-2.png");
  background-attachment: inherit;
  background-position: bottom;
}
.doctorsLoginBox{
  width: 400px;
}

@media (max-width: 768px) {
  .pageBanner {
    height: 150px;
    background-position: left bottom;
  }
  .doctorsLoginBox{
    width: auto;
  } 
}
`
