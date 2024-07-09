import React from 'react';
import styled from "styled-components";

const DatePickerComponent = ({ setSelectedDate, label }) => {
    const today = new Date().toISOString().split('T')[0];
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 28);
    const minDateString = minDate.toISOString().split('T')[0];

    return (
        <Wrapper className="container px-0">
            {label && <label htmlFor="datePickerInp"> {label} </label>}
            <input
                type="date"
                id='datePickerInp'
                className="form-control border p-3 bg-white"
                max={today}
                min={minDateString}
                onChange={(e) => { setSelectedDate(e.target.value) }}
                placeholder='Select a date'
            />
        </Wrapper>
    );
};

export default DatePickerComponent;

const Wrapper = styled.div`
#datePickerInp{
    max-width: 350px;
}
`