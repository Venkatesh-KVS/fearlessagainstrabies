import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material/";
import Form from "react-bootstrap/Form";
import axios from "axios";
import BASE_API_URL from "../apis/index";
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function DoctorsOTPloginForm({ setAuth, setDoctorId }) {
  const [otp, setOTP] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [OtpError, setOtpError] = useState("");
  const navigate = useNavigate();

  const handleMobileNumberSubmit = () => {
    if (/^\d{10}$/.test(mobileNumber)) {
      setLoading(true);
      const sendOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/doctors/login/send-otp`, { mobileNumber });
          console.log(response.data);
          if (response.data.Status === "Success") {
            setLoading(false);
            setShowOTPField(true);
            setMobileNumberError("");
          } else if ( response.data.Status === "NumNotExist" ) {
            setLoading(false);
            setShowOTPField(false);
            setMobileNumberError("Doctor does not exist with entered mobile number, please register");
          }
        } catch (error) { console.log(error); }
      };
      sendOTP();
    } else {
      setMobileNumberError(
        "Incorrect entry. Please enter a valid 10-digit mobile number."
      );
    }
  };
  
  const handleOTPSubmit = () => {
    if (/^\d{6}$/.test(otp)) {
      setLoading(true);
      const verifyOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/doctors/login/verify-otp`, { mobileNumber, otp });
          if (response) {
            setLoading(false);
            if (response.data.Status === "wrongOTP") {
              setOtpError("OTP mismatched, Try again...");
            } 
            else if (response.data.Status === "Verified") {
              // console.log(response.data);
              setAuth(true);
              setDoctorId(response.data.id);
              localStorage.setItem('doctorToken', response.data.doctorToken)
              navigate('/rabies-and-doctor');
              setOtpError("");
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
      verifyOTP();
    } else {
      setOtpError("Incorrect entry. Please enter a valid 4-digit OTP sent.");
    }
  };

  return (
    <Wrapper className="mt-3">
      <Grid container spacing={2} className="otpForm">
        <Form className="d-flex flex-column gap-3 w-100 ps-3 pt-3"
          onSubmit={(e) => {
            e.preventDefault();
            showOTPField ? handleOTPSubmit() : handleMobileNumberSubmit();
          }}
        >
          <Grid item xs={12}>
            <TextField
              required
              size="small"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              disabled={showOTPField}
              type={"text"}
              error={Boolean(mobileNumberError)}
              helperText={mobileNumberError ? mobileNumberError : "You will be recieve OTP on entered number!" }
            />
          </Grid>
          {showOTPField && (
            <Grid item xs={12}>
              <TextField
                required
                label="OTP"
                size="small"
                variant="outlined"
                fullWidth
                value={otp}
                type={"num"}
                onChange={(e) => setOTP(e.target.value)}
                error={Boolean(OtpError)}
                helperText={OtpError}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              disabled={loading}
            >
              {loading ? "Processing req..." : showOTPField ? "Verify OTP" : "Send OTP"}
            </Button>
          </Grid>
        </Form>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  button {
    background-color: var(--secondaryColor);
    box-shadow: rgba(15, 12, 15, 0.15) 0px 48px 100px 0px;
    &:hover {
      background-color: var(--primaryColor);
      box-shadow: rgba(15, 12, 15, 0.15) 0px 48px 100px 0px;
    }
  }
`;
