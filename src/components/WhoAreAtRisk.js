import React from "react";
import styled from "styled-components";

export const WhoAreAtRisk = () => {
  return (
    <Wrapper>
      <div className="aboutTab">
        <div className="waar d-flex gap-4">
          <div className="waar_c1 w-60">
            <h2 className="heading-2">About Fearless Against Rabies</h2>
            <p>
              Any activity that increases the probability of a person coming in
              contact with saliva, body fluids, or tissue of rabid animals
              increases the risk of rabies.
            </p>
            <p>
              Individuals who walk in the lonely lanes or forest regions, where
              there is less crowd are at risk of being bitten by rabid animals.
              This includes people who go for early morning walks or jogging and
              frequents trekkers.
            </p>
            <p>
              Children who walk to school or who tend to play with street dogs
              are also at increased risk of rabies.
            </p>
            <p>
              Pet owners who do not vaccinate their pets regularly are also at
              high risk of rabies.
            </p>
            <h5 className="primaryColor">
              Other factors that can increase the risk of rabies include:
            </h5>
            <ul>
              <li>
                Traveling or living in countries where rabies is common, such as
                countries in Africa and Southeast Asia.
              </li>
              <li>
                Activities that require you to be in contact with wild animals
                that may have rabies, like exploring caves that have bats or
                camping in regions without protecting the campsite from wild
                animals.
              </li>
              <li>Working in a laboratory with the rabies virus.</li>
            </ul>
          </div>
          <div className="waar_c2 w-40">
            <img src="./images/mask/girl_dog.jpg" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .waar_c2 {
    img {
      mask-image: url("./images/mask/scratch.svg");
      mask-repeat: no-repeat;
      mask-size: contain;
      mask-position: center;
      width: 100%;
    }
  }
`;
