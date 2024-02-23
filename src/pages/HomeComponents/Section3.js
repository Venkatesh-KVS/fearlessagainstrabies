import React from "react";
import styled from "styled-components";

export default function Section3() {
  return (
    <Wrapper>
      <div className="container d-flex s3">
        <div className="txtBox w-50 m-auto">
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
        <iframe
          width="560"
          height="315"
          className="boxShadow"
          src="https://www.youtube.com/embed/PAZqjN9Thx0?si=KEZZwRepXqYC8UaH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .s3 {
    padding: 65px;
    margin: 65px auto;
    background-color: #f9fafa;
    .txtBox {
      padding-right: 50px;
    }
    iframe {
      /* border-radius: 15px; */
    }
    .ytp-impression-link a {
      border: 2px solid red !important;
      display: none;
    }
  }
`;
