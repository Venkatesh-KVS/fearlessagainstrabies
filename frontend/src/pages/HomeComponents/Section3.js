import React from "react";
import styled from "styled-components";

export default function Section3() {
  return (
    <Wrapper>
      <div className="container mx-auto row bg-light p-md-5 py-5 my-5">
        <div className="txtBox col-md-6 m-auto">
          <h2 className="heading-2 mb-3 blackColor">
            CSR Initiative: Rabies Free Thiruvananthapuram
          </h2>
          <p className="textAll textColor">
            The ‘rabies free Thiruvananthapuram’ project is being implemented
            with the assistance of National Dairy Development Board and its
            subsidiary Indian Immunologicals Ltd (IIL). This is being
            implemented by the Compassion for Animals Welfare Association
            (CAWA). IIL funds this project through it’s CSR initiative.
          </p>
        </div>
        <div className="col-md-6">
          <iframe
            width="100%"
            height="315"
            className="boxShadow"
            src="https://www.youtube.com/embed/PAZqjN9Thx0?si=KEZZwRepXqYC8UaH"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
