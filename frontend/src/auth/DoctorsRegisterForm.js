import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material/";
import Form from "react-bootstrap/Form";
import axios from "axios";
import BASE_API_URL from "../apis/index";
import { styled } from "styled-components";

export default function DoctorsRegisterForm({ setregData, setShowPopup }) {
  const [otp, setOTP] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSpeciality, setUserSpeciality] = useState("");

  const [showOTPField, setShowOTPField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [OtpError, setOtpError] = useState("");

  const handleUserDataSubmit = () => {
    if (/^\d{10}$/.test(mobileNumber)) {
      const doctorData = {
        name: userName, 
        email: userEmail, 
        number: mobileNumber
      }
      setLoading(true);
      const sendOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/doctors/register/send-otp`, { doctorData });
          console.log(response.data);
          if (response.data.Status === "Success") {
            setLoading(false);
            setShowOTPField(true);
            setMobileNumberError("");
          } else if ( response.data.Status === "NumExists" ) {
            setLoading(false);
            setShowOTPField(false);
            setMobileNumberError("User exist with entered mobile number, please enter another mobile number");
          } else if ( response.data.Status === "EmailExists" ) {
            setLoading(false);
            setShowOTPField(false);
            setEmailError("Doctor exist with entered Email!");
          }
        } catch (error) {
            console.log(error);
        }
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
      const doctorData = {
        name: userName, 
        email: userEmail, 
        number: mobileNumber,
        speciality: userSpeciality,
        otp: otp,
      }
      setLoading(true);
      const verifyOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/doctors/register/verify-otp`, { doctorData });
          if (response) {
            setLoading(false);
            if (response.data.Status === "wrongOTP") {
              setOtpError("OTP mismatched, Try again...");
            } 
            else if (response.data.Status === "Verified") {
              setOtpError("");
              setShowPopup(true);
              setregData(response.data.regData);
              console.log(response.data)
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
            showOTPField ? handleOTPSubmit() : handleUserDataSubmit();
          }}
        >
          <Grid item xs={12}>
            <TextField
              required
              size="small"
              label="Name"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={showOTPField}
              margin="dense"
              type={"text"}
            />
            <TextField
              required
              size="small"
              label="Email"
              variant="outlined"
              fullWidth
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              disabled={showOTPField}
              margin="dense"
              type={"text"}
              error={Boolean(emailError)}
              helperText={ emailError }
            />
            <TextField
              required
              size="small"
              label="Speciality"
              variant="outlined"
              fullWidth
              value={userSpeciality}
              onChange={(e) => setUserSpeciality(e.target.value)}
              disabled={showOTPField}
              margin="dense"
              type={"text"}
            />
            <TextField
              required
              size="small"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              disabled={showOTPField}
              margin="dense"
              type={"text"}
              error={Boolean(mobileNumberError)}
              helperText={mobileNumberError ? mobileNumberError : "You will be recieve OTP on entered number!" }
            />
            
          </Grid>
          <Grid item xs={12}>
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
