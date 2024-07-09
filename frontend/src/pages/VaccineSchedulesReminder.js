import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from "styled-components";
import MobileNumberOTPForm from '../components/MobileNumberOTPForm';
import RVSbtnPopup from '../utils/RVSbtnPopup';
import { useNavigate } from 'react-router-dom';

function VaccineSchedulesReminder() {
    const { first_dose_date } = useParams();
    const [selectedDate, setSelectedDate] = useState('');
    const [scheduleDates, setScheduleDates] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        if (first_dose_date) {
            setSelectedDate(first_dose_date);
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
    }, [first_dose_date, selectedDate]);

    return (
        <Wrapper>
            <div className="container mt-md-4">
                <div className="rounded-4 row p-md-0 p-4">
                    <div className='col-md-6 py-md-5 pe-md-5 p-0'>
                        <h2 className='heading-3 mb-0 secondaryColor'> Your 5 Doses Schedule </h2>
                        <p> Based on 1st dose date your remaining 4 doses dates are scheduled as below, You'll get notified for your next dose 1 day before </p>
                        <div className='d-flex flex-column gap-1 datesWrpr'>
                            {
                                scheduleDates !== null &&
                                [
                                    { title: "st", date: scheduleDates.firstDoseDate },
                                    { title: "nd", date: scheduleDates.secondDoseDate },
                                    { title: "rd", date: scheduleDates.thirdDoseDate },
                                    { title: "th", date: scheduleDates.fourthDoseDate },
                                    { title: "th", date: scheduleDates.fifthDoseDate }
                                ].map((item, idx) => (
                                    <div key={idx} className="timeBox border">
                                        <p className='mb-0'> <span> {idx + 1}<sup>{item.title}</sup> Dose </span> <span className="fw-bold ps-2"> {item.date} </span> </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-6 p-md-5 p-3 bg-white shadow-sm rounded-4'>
                        <h2 className='heading-3 mb-0 secondaryColor'> Name and Mobile number </h2>
                        <p> You will be notified for your doses before 1 day </p>
                        <MobileNumberOTPForm firstDoseDate={selectedDate} setScheduleDates={setScheduleDates} setShowPopup={setShowPopup} />
                    </div>
                </div>
            </div>

            <RVSbtnPopup
                show={showPopup}
                selectedDate={selectedDate}
                scheduleDates={scheduleDates}
                onHide={() => {
                    setShowPopup(false);
                    setTimeout(() => { navigate('/') }, 1000);
                }}
            />
        </Wrapper>
    )
}

export default VaccineSchedulesReminder;

const Wrapper = styled.div`
.datesWrpr{
    border-left: 2px dashed #000;
}
.timeBox{
    width: 200px;
    padding: 5px 10px 5px 20px;
    ${'' /* box-shadow: rgba(55, 0, 0, 0.1) 0px 3px 10px 0px; */}
    border-radius: 0 8px 8px 0;
    position: relative;
}
.timeBox:before{
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 10px;
    left: -6px;
    border-radius: 10px;
    background: linear-gradient(to bottom, var(--secondaryColor), var(--primaryColor));
}
`