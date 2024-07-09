import React from "react";
import FARbtn from "./FARbtn";
import styled from "styled-components";

export default function FARcard({ bgImg, bgClr, btnLink, title, para, classPassed }) {
  return (
    <Wrapper 
      className={`far-card w-100 far-card-wrapper ${classPassed}`}
      style={{ backgroundImage: `url('${bgImg}')` }}
      >
      <div className="textBox d-flex justify-content-center flex-column">
        <h2 className="heading-2 text-white"> {title} </h2>
        {para && <p className="text-white"> {para} </p>}
        <FARbtn to={btnLink} />
      </div>
      <div className="color-box" style={{ background: bgClr }}></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 300px;
position: relative;
background-position: left center;
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
border-radius: 10px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
z-index: 0;
.textBox{
  width: 50%;
  padding: 20px;
}
.far-card-wrapper {
  color: white;
  z-index: 0;
}
.color-box {
  background-color: red;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(30%, -50%) rotate(-20deg);
  width: 80%;
  height: 250%;
  z-index: -1;
}
@media only screen and (max-width: 600px) {
background-size: contain;
height: 380px;
background-position: left top;
align-items: flex-end;
.textBox{
  width: 100%;
  padding: 30px;
}
.color-box {
  height: 100%;
  width: 100%;
  transform: translate(0%, -10%) rotate(0deg);
}
}
`
