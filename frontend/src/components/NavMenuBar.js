import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { styled } from "styled-components";

export default function NavMenuBar() {
  return (
    <Wrapper className="d-flex-cc flex-column navBar">
      <Navbar expand="lg" className="navMenu bgPrimary rounded-pill">
        <Nav className="navItems px-5 bgSecondary">
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/about-us"> About Us </Nav.Link>
          <Nav.Link href="/rabies-and-you"> Rabies & You </Nav.Link>
          <Nav.Link href="/rabies-and-doctor"> Rabies & Doctor </Nav.Link>
          <Nav.Link href="/pre-exposure-vaccination"> Pre Exposure Vaccination </Nav.Link>
          <Nav.Link href="/rabies-vaccine-schedule"> Rabies Vaccine Schedule </Nav.Link>
        </Nav>
      </Navbar>
      <Nav.Link href="/">
        <Image src={`/images/logo.svg`} alt="logo" className="header-logo" />
      </Nav.Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
