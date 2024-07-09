import React from "react";
import FARcard from "../../components/FARcard";
import styled from "styled-components";
import { RegisterRabiesEducation } from "../../components/Form";
import VaccineSchedulerSection from "./VaccineSchedulerSection";

export default function Section5() {
  return (
    <Wrapper className="container p-md-0 p-4 py-0">
      <VaccineSchedulerSection />
      
        {/* <FARcard
          bgImg={"/images/VP.jpg"}
          bgClr={"#F15A24"}
          btnLink={"/vaccination-calendar"}
          title={"Find Rabies Vaccine Schedule"}
        /> */}

        <div className="d-md-flex gap-4 py-4">
          <FARcard
            bgImg={"/images/feature_bg.jpg"}
            bgClr={"#F15A24"}
            btnLink={"/bitten-by-a-dog"}
            title={"Bitten by a dog?"}
            para={"Here's what you should do..."}
            classPassed={"mb-3"}
          />

          <FARcard
            bgImg={"/images/who-are-at-risk-of-rabies.jpg"}
            bgClr={"#B72133"}
            btnLink={"/who-are-at-risk"}
            title={"Who are at risk?"}
            para={
              "Any activity that increases the probability of a person coming in contact with saliva"
            }
          />
        </div>

        <div className="row gx-4">
          <div className="col-md-6">
            <FARcard
              bgImg={"/images/pledge.jpg"}
              bgClr={"#b4d626"}
              btnLink={"/oath"}
              title={"OATH"}
              para={"Let's take an oath to be fearless against rabies"}
              classPassed={"mb-3"}
            />
          </div>

          <div className="col-md-6">
            <div className="form-box">
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

const Wrapper = styled.div`
  margin-top: 65px;
  .form-box {
    background-image: url("https://fearlessagainstrabies.com/images/bg_school_education.png");
    background-position: bottom right;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
    padding: 50px;
    border-radius: 15px;
    height: 300px;
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
  @media only screen and (max-width: 600px) {
    .form-box {
      padding: 30px;
      height: 400px;
    }
  }
`;
