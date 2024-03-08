import React from "react";
import NavMenuBar from "./NavMenuBar";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <div className="container main-header d-flex-cc flex-column">
        <NavMenuBar />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main-header {
    .navBar {
      z-index: 100;
      .header-logo {
        width: 150px;
        padding: 10px;
      }
      .navMenu {
        padding: 3px 1px;
        overflow: hidden;
        .navItems {
          display: flex;
          gap: 35px;
          border-radius: 50px;
          a {
            color: #fff;
            font-size: 16px;
            transition: 0.2s;
            &:hover {
              scale: 1.05;
              background-color: var(--primaryColor);
            }
          }
        }
      }
    }
  }
`;
