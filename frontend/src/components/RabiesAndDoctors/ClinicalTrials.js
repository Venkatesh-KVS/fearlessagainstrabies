import React from "react";
// import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import { clinicalTrialsData } from "../../utils/AllData";

const ClinicalTrials = () => {
  return (
    <Wrapper>
      <div className="clinicalTrials">
        <h2 className="mb-3">Clinical Trials</h2>

        <div className="pdfs">
          {clinicalTrialsData.map((item) => (
            <div className="pdfBox">
              <div className="image">
                <img src={"/images/icons/pdf.svg"} width={20} alt="pdf" />
              </div>

              <h4 className="heading-5 mb-2">
                <a target="blank" href={item.path}>
                  {item.title}
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ClinicalTrials;
const Wrapper = styled.section`
  .pdfBox {
    display: flex;
    width: 100%;
    gap: 15px;
    h4 {
      font-size: 15px;
      a {
        color: var(--textColor);
        &:hover {
          color: var(--secondaryColor);
        }
      }
    }
  }
`;
