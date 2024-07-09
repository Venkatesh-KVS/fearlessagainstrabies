import React from "react";
import styled from "styled-components";

export const PreventionRabies = () => {
  return (
    <Wrapper>
      <div className="PR-r1">
        <h2 className="heading-2">Can rabies be prevented?</h2>
        <p>Yes, rabies can be prevented by taking some precautions:</p>

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="PR-box shadow rounded-4">
              <img src="/images/svg/vaccinate.svg" alt="" />
              <h4>Vaccinate the pets:</h4>
              <p>
                Pets like dogs and cats can be vaccinated against rabies. You
                veterinarian will tell you how often they should be vaccinated.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="PR-box  shadow rounded-4">
              <img src="/images/svg/protect.svg" alt="" />
              <h4>Protect your pets:</h4>
              <p>
                Keep your pets confined and monitor them when outside. Protect the
                smaller ones from predators and rabid animals.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="PR-box shadow rounded-4">
              <img src="/images/svg/seal_home.svg" alt="" />
              <h4>Seal your home:</h4>
              <p>
                Keep bats away from home; seal any gaps or cracks through which
                bats can enter.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="PR-box shadow rounded-4">
              <img src="/images/svg/human_vaccinated.svg" alt="" />
              <h4>Get vaccinated if travelling:</h4>
              <p>
                Before travelling to any country or region where rabies is a
                common condition, talk to your doctor if you can get vaccinated.
                You may receive the vaccine if you are planning to stay there for
                an extended period, or if the region lacks medical facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .PR-box {
    text-align: center;
    ${'' /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */}
    padding: 35px;
  }
  img {
    width: 100px;
  }
`;
