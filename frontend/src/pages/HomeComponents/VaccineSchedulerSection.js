import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import DatePickerComponent from "../../components/DatePickerComponent";
// import MobileNumberOTPForm from "../../components/MobileNumberOTPForm";
import VaccineSchedulesWrpr from "../../components/VaccineSchedulesWrpr";
import { Nav } from "react-bootstrap";

function VaccineSchedulerSection() {
    const [showNumField, setShowNumField] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [scheduleDates, setScheduleDates] = useState(null);
    // const [showMobileOtpForm, setShowMobileOtpForm] = useState(false);

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleFDoseDateSubmit = (e) => {
        e.preventDefault();
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }
    
        const firstDoseDate = new Date(selectedDate);
        const secondDoseDate = new Date(firstDoseDate);
        secondDoseDate.setDate(firstDoseDate.getDate() + 3);
    
        const thirdDoseDate = new Date(firstDoseDate);
        thirdDoseDate.setDate(firstDoseDate.getDate() + 7);
    
        const fourthDoseDate = new Date(firstDoseDate);
        fourthDoseDate.setDate(firstDoseDate.getDate() + 14);
    
        const fifthDoseDate = new Date(firstDoseDate);
        fifthDoseDate.setDate(firstDoseDate.getDate() + 27);
    
        setScheduleDates({
            firstDoseDate: formatDate(firstDoseDate),
            secondDoseDate: formatDate(secondDoseDate),
            thirdDoseDate: formatDate(thirdDoseDate),
            fourthDoseDate: formatDate(fourthDoseDate),
            fifthDoseDate: formatDate(fifthDoseDate),
        });
    
        setShowNumField(true);
    };    

    return (
        <Wrapper id="vaccSchdSec" className="my-md-5 mt-0 mb-3">
            <div className="far-card w-100 d-flex justify-content-md-end far-card-wrapper px-5" style={{ backgroundImage: `url(/images/rabiesVaccSchedule.jpg)` }}>
                <div className="far-card-content d-flex justify-content-center flex-column">
                    <p className="mb-0 primaryColor"> Find Rabies Vaccine Schedule </p>
                    <h2 className="heading-3 mb-4">Select 1st Dose Vaccine Date</h2>

                    <form onSubmit={handleFDoseDateSubmit}>
                        <DatePickerComponent setSelectedDate={setSelectedDate} label={""} />
                        <Button type="submit" className="btnRVS mt-4" variant="outlined"> Get Scheduled Dates </Button>
                    </form>
                </div>
                <div className="color-box"></div>
                <div className="dots-box"></div>
            </div>
            {
                showNumField && (
                    <div className="p-md-5 p-3">
                        <h2 className='heading-3 mb-2 secondaryColor text-center'> Your 5 Doses Schedule </h2>
                        {/* <p className='text-center'> Based on 1st dose date your remaining 4 doses dates are scheduled as below, You'll get notified for your next dose 1 day before </p> */}
                        { scheduleDates !== "" &&  <VaccineSchedulesWrpr scheduleDates={scheduleDates} /> }
                        <div className="d-flex-cc flex-column">
                            <p className="text-center mt-5"> To get the SMS reminder of next vaccine doses in your mobile please click the button below </p>
                            <Nav.Link href={`/rabies-vaccine-schedule-reminder/${selectedDate}`}>
                                <Button className="btnRVS"> Get Reminder </Button>
                            </Nav.Link>
                        </div>
                    </div>
                )
            }
        </Wrapper>
    );
}

export default VaccineSchedulerSection;

const Wrapper = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 10px;
overflow: hidden;
.far-card{
    height: 300px;
    position: relative;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 50%;
    overflow: hidden;
    z-index: 0;
    .far-card-content{
        width: 50%;
    }
    .color-box {
        background-color: white;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(30%, -50%) rotate(-20deg);
        width: 80%;
        height: 250%;
        z-index: -1;
    }
    .dots-box {
        background-image: url("./images/svg/dots.png");
        background-size: contain;
        background-position: top center;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(30%, -50%) rotate(-20deg);
        width: 80%;
        height: 250%;
        z-index: -1;
        opacity: 0.2;
    }
}
.btnRVS {
  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  border: 2px solid var(--secondaryColor);
  &:hover {
    border: 2px solid var(--secondaryColor);
    color: var(--secondaryColor);
    background-color: var(--whiteColor);
  }
}

@media only screen and (max-width: 600px) {
    .far-card{
        height: 400px;
        background-position: left top;
        background-size: contain;
        .far-card-content{
            width: 100%;
            padding-top: 70px; 
        }
        .color-box {
            background-color: white;
            position: absolute;
            top: 20%;
            right: 0;
            transform: translate(0%, 0%) rotate(0deg);
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
}
`
