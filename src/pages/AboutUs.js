import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <Wrapper>
      <div className="about-us">
        <div className="about-banner d-flex">
          <div className="left w-60 "></div>
          <div className="right w-40 ">
            <h3 className="heading-3 textColor m-0">EDUCATE & REDUCE</h3>
            <h1 className="heading-1 primaryColor">The Incidence of Rabies</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .about-us {
    margin-top: -180px;
  }
  .about-banner {
    height: 78vh;
    background-image: url("./images/banner/about-rabies.jpg");
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat;
    .right {
      vertical-align: center;
      justify-content: center;
      margin: auto 50px 100px;
      h3 {
        font-family: inherit;
        font-weight: 600;
      }
    }
  }
`;
