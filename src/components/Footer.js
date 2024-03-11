// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { NewsLetter } from "./Form";

export default function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="f-top">
          <div className="s6-icon">
            <img src="./images/svg//hours1.svg" alt="" />
          </div>
          <div className="s6-info">
            <h5>For any queries, please reach out to us on</h5>
            <h2 className="heading-2 secondaryColor">1800 313 99 99 77</h2>
          </div>
        </div>
        <div className="f-middle ">
          <div className="fm-c container">
            <div className="fm-c-r1 d-flex">
              <div className="fm-c-r1c1 logo w-15">
                <Nav.Link href="/">
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="header-logo"
                  />
                </Nav.Link>
              </div>
              <div className="fm-c-r1c2 f-menu-items w-60 px-5">
                <div className="nav1">
                  <Nav className="nav-items d-flex flex-column">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/about-us"> About Us </Nav.Link>
                    <Nav.Link href="/rabies-and-you"> Rabies & You </Nav.Link>
                    <Nav.Link href="/rabies-and-doctor">
                      Rabies & Doctor
                    </Nav.Link>
                  </Nav>
                </div>
                <div className="nav2 ">
                  <Nav className="nav-items d-flex flex-column">
                    <Nav.Link href="/about-us"> Bitten by a dog? </Nav.Link>
                    <Nav.Link href="/about-us"> Who are at risk? </Nav.Link>
                    <Nav.Link href="/about-us "> Oath </Nav.Link>
                    <Nav.Link href="/pre-exposure-vaccination">
                      Pre Exposure Vaccination
                    </Nav.Link>
                    <Nav.Link href="/rabies-vaccine-schedule">
                      Rabies Vaccine Schedule
                    </Nav.Link>
                  </Nav>
                </div>
              </div>

              {/* News Letter */}

              <div className="fm-c-r1c3 f-ns w-25">
                <NewsLetter />
              </div>
            </div>
            <div className="fm-c-r2 ">
              <div className="social">
                <Nav.Link href="/">
                  <img src="./images/social/facebook.png" alt="facebook" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="./images/social/twitter.png" alt="twitter" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="./images/social/instagram.png" alt="instagram" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="./images/social/linkedin.png" alt="linkedin" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="./images/social/youtube.png" alt="youtube" />
                </Nav.Link>
              </div>
              <p>
                An initiative by Human Biologicals Institute. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="fb container pt-5">
            <div className="fb-logo">
              <Nav.Link href="/">
                <img src="./images/HBI-logo.png" alt="youtube" />
              </Nav.Link>
            </div>
            <div className="fb-content">
              <p>
                Disclaimer: The data contained in this website is intended for
                general reference only and is meant for viewers in India only.
                It may refer to pharmaceutical products, diagnostic techniques,
                therapeutics or indications not yet registered or approved in a
                given country and it should be noted that, over time, currency
                and completeness of the data may change. For updated
                information, please contact the Company. This data should not be
                used to diagnose, treat, cure or prevent any disease without the
                professional advice of a Registered Medical Practitioner, and
                does not replace medical advice or a thorough medical
                examination. Registered Medical Practitioners should use their
                independent professional judgement in checking the symptoms,
                diagnosing & suggesting the appropriate line of treatment for
                patients. Human Biologicals Institute (HBI) is not in any way
                influencing, propagating or inducing anyone to buy or use HBI
                products. HBI accepts no liability for any loss, damage or
                compensation claims in connection with any act or omission by
                anyone based on information contained in or derived through use
                of this website. Duplication of or copying any data requires
                prior permission of the copyright holder. For adverse event
                reporting with respect to products of HBI, kindly contact our
                local Drug Safety Unit at
                <a href="mailto:hbicustomercare@indimmune.com">
                  hbicustomercare@indimmune.com.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .footer {
    .f-top {
      margin: 65px auto 35px;
      display: flex;
      gap: 20px;
      padding: 25px;
      border: 2px dashed var(--secondaryColor);
      border-radius: 15px;
      background-color: aliceblue;
      width: 550px;
      justify-content: center;
      align-items: center;
      .s6-icon {
        width: 70px;
        height: auto;
      }
      transition: 0.3s;
      &:hover {
        background-color: var(--primaryColor);
        h5,
        h2 {
          color: var(--whiteColor);
        }
      }
    }
    .f-middle {
      /* background-color: aliceblue; */
      border-top: 1px solid #dadada;
      .fm-c {
        padding: 65px 0px 0px;
        .fm-c-r1 {
        }
        .f-menu-items {
          display: flex;
          gap: 50px;
          justify-content: center;
          a {
            color: inherit;
            &:hover {
              color: var(--primaryColor);
            }
          }
        }
        .f-ns {
          label {
            color: var(--blackColor);
          }
          input {
            background-color: #f1f1f1;
            width: 100%;
            /* font-size: 12px; */
            padding: 10px 20px;
            border: none;
            border-radius: 0;
          }
          button {
            color: var(--whiteColor);
            background-color: var(--secondaryColor);
            &:hover {
              background-color: var(--primaryColor);
            }
          }
        }
      }
      .fm-c-r2 {
        text-align: center;
        .social {
          margin: 25px;
          display: flex;
          gap: 10px;
          justify-content: center;
          img {
            width: 35px;
          }
        }
      }
    }
    .f-bottom {
      background-color: #f1f1f1;
      .fb {
        font-size: 12px;
        display: flex;
        gap: 20px;
        .fb-logo img {
          width: 300px;
        }
      }
    }
  }
`;
