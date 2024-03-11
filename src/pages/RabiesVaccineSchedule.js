import React from "react";
import { Button } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styled from "styled-components";

export default function RabiesVaccineSchedule() {
  return (
    <Wrapper>
      <div className="RVS">
        <div className="pageBanner RVS-banner"></div>
        <div className="RVS-s1 container d-flex">
          <div className="RVSbox d-flex w-50">
            <h2 className="heading-2 primaryColor">RABIES VACCINE SCHEDULE</h2>
            <p>Select 1st Dose Vaccine Date</p>
            <div className="RVSdateField">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker className="datePicker" label="Select Date" />
                </DemoContainer>
              </LocalizationProvider>
              <Button className="btnRVS mt-4 " variant="outlined">
                See Dates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .RVS-banner {
    background-image: url("./images/banner/rvsBg.jpg");
  }
  .RVS-s1 {
    justify-content: center;
    .RVSbox::before {
      content: "";
      background-image: url("./images/svg/dots.png");
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 25%;
    }
    .RVSbox {
      background-color: #fff;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin-top: -10%;
      padding: 50px;
      text-align: center;
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

      .datePicker {
        &:f {
          border: 1px solid red;
          background-color: green;
        }
      }
    }
    .btnRVS {
      margin-top: 35px;
      background-color: var(--secondaryColor);
      color: var(--whiteColor);
      border: 2px solid var(--secondaryColor);
      &:hover {
        border: 2px solid var(--secondaryColor);
        color: var(--secondaryColor);
        background-color: var(--whiteColor);
      }
    }
  }
`;
