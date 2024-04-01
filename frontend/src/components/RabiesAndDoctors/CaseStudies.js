import React from "react";
import styled from "styled-components";
import { caseStudiesData } from "../../utils/AllData";
import Accordion from "react-bootstrap/Accordion";

const CaseStudies = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="mb-3">Case Studies</h2>
        <div className="pdfs">
          {caseStudiesData.map((item) => (
            <div className="pdfBox">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="">
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.info}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CaseStudies;
const Wrapper = styled.section`
  button {
    font-size: 16px;
    font-family: var(--text);
    width: 100% !important;
    justify-content: space-between;
    &:focus {
      color: var(--secondaryColor);
    }
  }
  .accordion-item {
    width: 1000px;
    margin-bottom: 10px;
    font-family: inherit !important;
    padding: 0;
  }
`;
