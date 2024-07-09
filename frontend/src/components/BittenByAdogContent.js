import React from "react";
import styled from "styled-components";

export const BittenByAdogContent = () => {
  return (
    <Wrapper>
      <div className="bBd">
        <div className="bBd_r1">
          <h2 className="heading-2">Bitten by an animal?</h2>
          <h3 className="heading-3 primaryColor">Here’s what you should do…</h3>
        </div>
        {/* ------------------------ */}
        <div className="dos">Do's</div>
        <div className="bBd_row bBd_r2 d-md-flex">
          <div className="bBd_box">
            <h3>Step-1</h3>
            <img src="./images/svg/step1.svg" alt="" />
            <p>
              Wash the wound with running water & soap for at least 10 minutes.
            </p>
          </div>
          <div className="bBd_box">
            <h3>Step-2</h3>
            <img src="./images/svg/step2.svg" alt="" />
            <p>
              Apply antiseptics like povidone iodine, spirit or antiseptic
              lotion.
            </p>
          </div>
          <div className="bBd_box">
            <h3>Step-3</h3>
            <img src="./images/svg/step3.svg" alt="" />
            <p>Consult a doctor & take the necessary vaccines immediately.</p>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="donts">Dont's</div>
        <div className="bBd_row bBd_r3 d-flex flex-wrap">
          <div className="bBd_box">
            <h3>Step-1</h3>
            <img src="./images/svg/ustep1.svg" alt="" />
            <p>Don’t suture the wound.</p>
          </div>
          <div className="bBd_box">
            <h3>Step-2</h3>
            <img src="./images/svg/ustep2.svg" alt="" />
            <p>Don’t bandage or dress the wound.</p>
          </div>
          <div className="bBd_box">
            <h3>Step-3</h3>
            <img src="./images/svg/ustep3.svg" alt="" />
            <p>Don’t cauterize the wound.</p>
          </div>
          <div className="bBd_box">
            <h3>Step-4</h3>
            <img src="./images/svg/ustep4.svg" alt="" />
            <p>
              Don’t apply any local applicants like turmeric, neem, lime, red
              chilli, plant juices, coffee powder, coin, etc.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bBd {
    .bBd_row {
      gap: 0.6rem;
    }
    .dos {
      margin: 20px auto !important;
      background-color: green !important;
    }
    .dos,
    .donts {
      color: #fff;
      padding: 10px 25px;
      background-color: red;
      display: inline-block;
      border-radius: 10px;
      margin: 35px 0 20px 0;
    }
    .bBd_box {
      width: 32.3%;
      padding: 25px;
      text-align: center;
      border-radius: 15px;
      background-color: var(--bg);
    }
  }
  @media (max-width: 768px) {
    .bBd_box {
      width: 100% !important;
      padding: 25px;
      margin: 10px 0;
      text-align: center;
      border-radius: 15px;
      background-color: var(--bg);
    }
    
  }
`;
