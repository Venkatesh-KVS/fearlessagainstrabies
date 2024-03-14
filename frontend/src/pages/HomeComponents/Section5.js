import React from "react";
import FARcard from "../../components/FARcard";
import styled from "styled-components";
import { RegisterRabiesEducation } from "../../components/Form";

export default function Section5() {
  return (
    <Wrapper>
      <div className="s5 container-1180">
        <FARcard
          bgImg={"/images/VP.jpg"}
          bgClr={"#F15A24"}
          btnLink={"/vaccination-calendar"}
          title={"Find Rabies Vaccine Schedule"}
        />

        <div className="d-flex gap-4 py-4">
          <FARcard
            bgImg={"/images/feature_bg.jpg"}
            bgClr={"#F15A24"}
            btnLink={"/bitten-by-a-dog"}
            title={"Bitten by a dog?"}
            para={"Here's what you should do..."}
          />

          <FARcard
            bgImg={"/images/who-are-at-risk-of-rabies.jpg"}
            bgClr={"#B72133"}
            btnLink={"/who-are-at-risk-of-rabies"}
            title={"Who are at risk?"}
            para={
              "Any activity that increases the probability of a person coming in contact with saliva"
            }
          />
        </div>

        <div className="d-flex gap-4">
          <div className="w-50 ">
            <FARcard
              bgImg={"/images/pledge.jpg"}
              bgClr={"#b4d626"}
              btnLink={"/oath"}
              title={"OATH"}
              para={"Let's take an oath to be fearless against rabies"}
            />
          </div>

          <div className="form-box w-50">
            <h5 className="heading-5 primaryColor m-0">
              Register Your School for
            </h5>
            <h2 className="heading-2 secondaryColor">Rabies Education</h2>

            <RegisterRabiesEducation />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .s5 {
    margin-top: 65px;
  }
  .form-box {
    background-image: url("https://fearlessagainstrabies.com/images/bg_school_education.png");
    background-position: bottom right;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
    padding: 35px;
    border-radius: 15px;
  }

  button {
    background-color: var(--primaryColor);
    margin-top: 10px;
    color: var(--whiteColor);
    &:hover {
      color: var(--whiteColor);
      background-color: var(--secondaryColor);
    }
  }

  .form-fields {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    input {
      padding: 20px 10px 8px;
      background-color: #fff;
    }
  }
`;
