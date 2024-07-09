import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrolled={scrolled}>
      <div className="container main-header d-flex-cc flex-column">
        <div className="d-flex justify-md-content-center justify-content-between w-100 align-items-center navBar">
          <NavLink to="/" className="nav-link">
            <Image
              src={`/images/logo.svg`}
              alt="logo"
              className={`header-logo ${scrolled ? "scrolled" : ""}`}
            />
          </NavLink>
          <Navbar expand="lg" className="navMenu bgPrimary rounded-pill">
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Image
                    src={`/images/logo.svg`}
                    alt="logo"
                    className={`header-logo ${scrolled ? "scrolled" : ""}`}
                    style={{ width: "150px" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navItems bgSecondary text-white rounded-pill">
                  <NavLink to="/" className="nav-link" activeClassName="active" onClick={handleClose}> Home </NavLink>
                  <NavLink to="/about-us" className="nav-link" activeClassName="active" onClick={handleClose}> About Us </NavLink>
                  <NavLink to="/rabies-and-you" className="nav-link" activeClassName="active" onClick={handleClose}> Rabies & You </NavLink>
                  <NavLink to="/rabies-and-doctor" className="nav-link" activeClassName="active" onClick={handleClose}> Rabies & Doctor </NavLink>
                  <NavLink to="/pre-exposure-vaccination" className="nav-link" activeClassName="active" onClick={handleClose}> Pre Exposure Vaccination </NavLink>
                  <NavLink to="/rabies-vaccine-schedule" className="nav-link" activeClassName="active" onClick={handleClose}> Rabies Vaccine Schedule </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: ${({ scrolled }) => (scrolled ? 'white' : 'transparent')};
    transition: background-color 0.3s ease;
    box-shadow: ${({ scrolled }) => (scrolled ? 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' : 'none')};
    ${'' /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */}
  .main-header {
    .navBar {
      .header-logo {
        width: ${({ scrolled }) => (scrolled ? '80px' : '180px')};
        transition: width 0.3s ease, padding 0.3s ease;
        padding: ${({ scrolled }) => (scrolled ? '10px 0' : '20px 0')};
      }
      .navMenu {
        padding: 3px;
        overflow: hidden;
        .navItems {
          .nav-link {
            color: #fff;
            font-size: 16px;
            transition: 0.2s;
            padding: 8px 15px;
            &:hover {
              scale: 1.05;
              background-color: var(--primaryColor);
            }
            &.active {
              background-color: var(--primaryColor);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    background-color: white;
    .header-logo {
      width: ${({ scrolled }) => (scrolled ? '100px' : '130px')} !important;
    }
    .navItems {
      border: 3px solid green;
      flex-direction: column;
      gap: 0px !important;
      .nav-link {
        text-align: center;
        padding: 10px 20px !important; 
        color: white;
      }
    }
  }
`;
