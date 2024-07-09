import React from 'react';
import styled from "styled-components";
import DoctorsOTPloginForm from './DoctorsOTPloginForm';
import { Nav } from 'react-bootstrap';

export default function Login({ setAuth, setDoctorId }) {
  return (
    <Wrapper>
      <div className="pageBanner"></div>

      <div className="container p-4">
        <div className="doctorsLoginBox mx-auto shadow rounded-4 p-md-5 p-4 mt-md-5">
          <h2 className="heading-2 mb-0 secondaryColor text-center"> Login </h2>
          <DoctorsOTPloginForm setAuth={setAuth} setDoctorId={setDoctorId} />

          <Nav.Link href="/register" className='mt-4 text-center'> <span className='primaryColor'> Register </span> </Nav.Link>
        </div>
      </div>
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
