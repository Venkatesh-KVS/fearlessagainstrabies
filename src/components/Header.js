import React from "react";
import NavMenuBar from "./NavMenuBar";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <div className="main-header d-flex-cc flex-column">
        <NavMenuBar />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .navBar {
    z-index: 100;
  }
  .header-logo {
    width: 150px;
    padding: 10px;
  }
  .navBar {
    .navItems {
      width: 80vw;
      height: 60px;
      display: flex;
      border-radius: 50px;
      .navB {
        padding: 5px 20px;
        border-radius: 50px;
        width: 100%;
      }
      a {
        color: #fff;
        margin: auto 10px;
        font-size: 16px;
        transition: 0.2s;
        &:hover {
          scale: 1.05;
        }
      }
    }
  }
`;
