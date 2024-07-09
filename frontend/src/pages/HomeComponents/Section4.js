import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";

export default function Section4() {
  return (
    <Wrapper>
      <div className="s4">
        <Container className="s4Container">
          <h2 className="heading-2 blackColor">Facts</h2>
          <h5 className="heading-5 textColor ">
            Rabies is a major public health problem
          </h5>

          <div className="row mt-4">
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor"> One death </h2>
              <p className="textAll textColor">every 15 minutes worldwide</p>
            </div>
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor">7 million</h2>
              <p className="textAll textColor">
                people receive post-bite vaccination per year
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor">4 OUT OF 10</h2>
              <p className="textAll textColor">Deaths are in children</p>
            </div>
          </div>

          <div className="row mt-3 justify-content-center align-items-center">
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor"> 99.9% </h2>
              <p className="textAll textColor"> fatal once symptoms appear </p>
            </div>
            <div className="col-md-4">
              <img src="/images/fact_center.png" alt="pup" />
            </div>
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor">99%</h2>
              <p className="textAll textColor">transmissions by dogs</p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor"> 40% </h2>
              <p className="textAll textColor">
                people bitten by suspect rabid animals are &lt;15 years old
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor"> 18,000 - 20,000 </h2>
              <p className="textAll textColor"> cases occur every year in India </p>
            </div>
            <div className="col-md-4">
              <h2 className="heading-2 mb-0 primaryColor"> 36% </h2>
              <p className="textAll textColor"> of rabies deaths occur in India </p>
            </div>
          </div>
          <h5 className="mt-4 heading-5">
            <strong>Source:</strong> World Health Organization 2014;92:230
          </h5>
        </Container>
        <Image src="/images/bg_facts.png" alt="bg_facts" className="w-100" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .s4 {
    .s4Container {
      text-align: center;
    }
  }
`;
