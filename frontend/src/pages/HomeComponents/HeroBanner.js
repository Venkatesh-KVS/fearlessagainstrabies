import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export default function HeroBanner() {
  return (
    <Wrapper>
      <div className="heroSec">
        <Carousel fade>
          {[
            { imageSrc: "/images/homeBanner1.jpg", caption: <Caption1 /> },
            { imageSrc: "/images/homeBanner22.jpg", caption: <Caption2 /> },
            { imageSrc: "/images/homeBanner31.jpg", caption: <Caption3 /> },
            { imageSrc: "/images/homeBanner42.jpg", caption: <Caption4 /> },
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <div
                className="carouselBox"
                style={{
                  background: `url("${item.imageSrc}")`,
                  backgroundPosition: "right top",
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
      <div className="sideSpaceBox"></div>
      <div className="slide-info">
        <h1 className="heading-1">
          <span className="bg-white primaryColor"> WE BOTH ARE PROTECTED AGAINST RABIES </span>
        </h1>
        <div className="d-flex justify-content-between align-items-center p-0">
          <h2 className="heading-2 whiteColor"> ARE YOU TOO? </h2>
          <button className="lm bgSecondary btn-lg"> Learn More </button>
        </div>
      </div>
    </div>
  );
};

const Caption2 = () => {
  return (
    <div className="d-flex">
      <div className="sideSpaceBox"></div>
      <div className="slide-info">
        <h1 className="heading-1"> 
          <span className="bg-white primaryColor"> LET YOUR PET LOVE BE FEARLESS </span> 
        </h1>
        <h2 className="heading-2 whiteColor">PROTECT YOURSELF</h2>
      </div>
    </div>
  );
};

const Caption3 = () => {
  return (
    <div className="d-flex">
      <div className="sideSpaceBox"></div>
      <div className="slide-info">
        <h1 className="heading-1">
          <span className="bg-white primaryColor"> LET YOUR CHILD BE FEARLESS </span>  
        </h1>
        <h2 className="heading-2 whiteColor"> PROTECT FROM RABIES </h2>
      </div>
    </div>
  );
};

const Caption4 = () => {
  return (
    <div className="d-flex ">
      <div className="sideSpaceBox"></div>
      <div className="slide-info">
        <h1 className="heading-1"> 
          <span className="bg-white primaryColor"> LET YOUR MORNING RUN BE FEARLESS </span>
        </h1>
        <h2 className="heading-2 whiteColor"> PROTECT YOURSELF FROM RABIES </h2>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: -167px;
  z-index: 0;

  .heroSec {
    margin-bottom: 65px;
    .carousel{
      height: 100vh;
      .carousel-caption{
        left: 0%;
        right: 12%;
      }
    }
    .carouselBox{
      height: 100vh;
      width: 100%;
    }
    .sideSpaceBox{
      width: 65%;
    }
    .slide-info {
      width: 35%;
      text-align: start;
      padding-bottom: 5%;
    }
    .heading-2 {
      text-shadow: 2px 2px #000;
      font-family: inherit;
      line-height: 1.3em;
      font-size: 18px;
      font-weight: 800;
    }
    .heading-1 {
      text-shadow: 1px 1px #00000050;
      font-size: 42px;
    }
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
    span.carousel-control-next-icon, span.carousel-control-prev-icon {
      color: var(--secondaryColor);
    }

    .lm {
      padding: 10px 28px;
      background-color: var(--secondaryColor);
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
    }
    .lm:hover {
      background-color: var(--primaryColor);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    .heroSec{
      margin-bottom: 30px;
      .carousel{
        height: 40vh;
      }
      .carouselBox{
        height: 40vh;
        width: 100%;
      }
    }

    .sideSpaceBox{
      width: 40% !important;
    }
    .slide-info {
      width: 60% !important;
      padding-bottom: 0% !important;
    }

    .heading-1 {
      font-size: 28px !important;
    }
    .heading-2 {
      line-height: 0.5rem;
      font-size: 18px !important;
      font-weight: 800;
    }
    .lm {
      margin: 0 auto !important;
    }
  }
`;
