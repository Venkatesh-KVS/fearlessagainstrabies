import React from "react";

import styled from "styled-components";
import { resources } from "../../utils/AllData";

const Resources = () => {
  return (
    <Wrapper>
      <div className="resources">
        <h2 className="mb-3">Resources</h2>
        <div className="pdfs">
          {resources.map((item) => (
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

export default Resources;
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
