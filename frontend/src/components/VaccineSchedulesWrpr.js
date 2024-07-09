import React from 'react';
import styled from "styled-components";

function VaccineSchedulesWrpr({ scheduleDates }) {
    return (
        <Wrapper className='d-md-flex justify-content-center align-items-center gap-2'>
            {
                [
                    { title: "First Dose", date: scheduleDates.firstDoseDate },
                    { title: "Second Dose", date: scheduleDates.secondDoseDate },
                    { title: "Third Dose", date: scheduleDates.thirdDoseDate },
                    { title: "Fourth Dose", date: scheduleDates.fourthDoseDate },
                    { title: "Fifth Dose", date: scheduleDates.fifthDoseDate }
                ].map((item, idx) => (
                    <div key={idx} className="timeBox text-center bg-white rounded-3 border p-3">
                        <p className="mb-0"> { item.title } </p>
                        <h2 className="heading-3 date"> { item.date } </h2>
                    </div>
                ))
            } 
        </Wrapper>
    )
}

export default VaccineSchedulesWrpr;

const Wrapper = styled.div``