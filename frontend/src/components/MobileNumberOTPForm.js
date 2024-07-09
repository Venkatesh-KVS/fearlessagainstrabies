import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material/";
import Form from "react-bootstrap/Form";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import BASE_API_URL from "../apis/index";
import { styled } from "styled-components";

export default function MobileNumberOTPForm({ firstDoseDate, setScheduleDates, setShowPopup }) {
  const [otp, setOTP] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");

  const [showOTPField, setShowOTPField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [OtpError, setOtpError] = useState("");

  const handleMobileNumberSubmit = () => {
    if (/^\d{10}$/.test(mobileNumber)) {
      setLoading(true);
      const sendOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/user/send-otp`, { mobileNumber });
          console.log(response.data);
          if (response.data.Status === "Success") {
            setLoading(false);
            setShowOTPField(true);
            setMobileNumberError("");
          } else if ( response.data.Status === "NumExists" ) {
            setLoading(false);
            setShowOTPField(false);
            setMobileNumberError("User exist with entered mobile number, please enter another mobile number");
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
      setLoading(true);
      const verifyOTP = async () => {
        try {
          const response = await axios.post(`${BASE_API_URL}/user/verify-otp`, { mobileNumber, otp, firstDoseDate, userName });
          if (response) {
            setLoading(false);
            if (response.data.Status === "wrongOTP") {
              setOtpError("OTP mismatched, Try again...");
            } 
            else if (response.data.Status === "Verified") {
              setOtpError("");
              setShowPopup(true);
              if(response.data.dosageDates){
                setScheduleDates(response.data.dosageDates);
              }
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
    <Wrapper>
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
              label="Name"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={showOTPField}
              type={"text"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              disabled={showOTPField}
              type={"tel"}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              error={Boolean(mobileNumberError)}
              helperText={mobileNumberError}
            />
          </Grid>
          {showOTPField && (
            <Grid item xs={12} className="mb-2">
              <TextField
                required
                label="OTP"
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
          <FormGroup>
            <FormControlLabel 
              className="align-items-start" 
              required 
              control={<Checkbox className="p-0 px-2" />} 
              label="By Clicking on the checkbox, I hereby consent to Fearless Against Rabies team to contact me for providing further information on vaccine doses. I also consent to the Terms of Use and Privacy policy of Fearless Against Rabies website." 
            />
          </FormGroup>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
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
  width: 100%;
  button {
    background-color: var(--secondaryColor);
    box-shadow: rgba(15, 12, 15, 0.15) 0px 48px 100px 0px;
    &:hover {
      background-color: var(--primaryColor);
      box-shadow: rgba(15, 12, 15, 0.15) 0px 48px 100px 0px;
    }
  }

  @media (max-width: 768px){
    max-width: auto;
    min-width: auto;
  }
`;
