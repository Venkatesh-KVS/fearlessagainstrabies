import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export default function HeroBanner() {
  return (
    <Wrapper>
      <div className="heroSec">
        <Carousel fade style={{ height: "100vh" }}>
          {[
            { imageSrc: "/images/banner_home_01.jpg", caption: <Caption1 /> },
            { imageSrc: "/images/banner_home_04.jpg", caption: <Caption2 /> },
            { imageSrc: "/images/banner_home_02.jpg", caption: <Caption3 /> },
            { imageSrc: "/images/banner_home_03.jpg", caption: <Caption4 /> },
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background: `url("${item.imageSrc}")`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <Carousel.Caption>{item.caption}</Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
}

const Caption1 = () => {
  return (
    <div className="d-flex">
      <div className="w-60"></div>
      <div className="slide-info w-40 ">
        <h1 className="heading-1 primaryColor">
          WE BOTH ARE PROTECTED AGAINST RABIES{" "}
        </h1>
        <h2 className="heading-2 whiteColor"> ARE YOU TOO? </h2>
        <button className="lm bgSecondary btn-lg"> Learn More </button>
      </div>
    </div>
  );
};

const Caption2 = () => {
  return (
    <div className="d-flex">
      <div className="w-60"></div>
      <div className="slide-info w-40">
        <h1 className="heading-1 primaryColor">
          LET YOUR PET LOVE BE FEARLESS
        </h1>
        <h2 className="heading-2 whiteColor">PROTECT YOURSELF</h2>
      </div>
    </div>
  );
};

const Caption3 = () => {
  return (
    <div className="d-flex">
      <div className="w-60"></div>
      <div className="slide-info w-40">
        <h1 className="heading-1 primaryColor"> LET YOUR CHILD BE FEARLESS </h1>
        <h2 className="heading-2 whiteColor"> PROTECT FROM RABIES </h2>
      </div>
    </div>
  );
};

const Caption4 = () => {
  return (
    <div className="d-flex ">
      <div className="w-60"></div>
      <div className="slide-info w-40">
        <h1 className="heading-1 primaryColor">
          LET YOUR MORNING RUN BE FEARLESS
        </h1>
        <h2 className="heading-2 whiteColor"> PROTECT YOURSELF FROM RABIES </h2>
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  .heroSec {
    margin-bottom: 65px;
    .slide-info {
      text-align: start;
      padding-bottom: 5%;
    }
    .heading-2 {
      text-shadow: 2px 2px #00000080;
      font-family: inherit;
      line-height: 1.3em;
      font-size: 24px;
      margin: 20px auto;
      font-weight: 800;
    }
    .heading-1 {
      text-shadow: 1px 1px #00000050;
      font-size: 58px;
    }
    margin-top: -172px;
    z-index: 0;
    .carousel-indicators {
      gap: 5px;
      button {
        background-color: #fff;
        border: #1d1d1d;
        gap: 10px;
        padding: 2px;
        width: 20px;
        border-radius: 5px;
      }
      .active {
        background-color: var(--secondaryColor);
      }
    }
    span {
      color: var(--secondaryColor);
    }
  }
`;
