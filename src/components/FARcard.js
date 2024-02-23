import React from "react";
import FARbtn from "./FARbtn";

export default function FARcard({ bgImg, bgClr, btnLink, title, para }) {
  return (
    <div
      style={{ backgroundImage: `url('${bgImg}')` }}
      className="far-card d-flex justify-content-end far-card-wrapper"
    >
      <div className="w-50 d-flex justify-content-center flex-column">
        <h2 className="heading-2 text-white"> {title} </h2>
        {para && <p className="text-white"> {para} </p>}
        <FARbtn to={btnLink} />
      </div>
      <div className="color-box" style={{ background: bgClr }}></div>
    </div>
  );
}
