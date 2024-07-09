// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { NewsLetter } from "./Form";

export default function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="container d-flex-cc">
          <div className="d-inline-block">
            <div className="f-top d-flex-cc gap-2 p-3 mt-5 mb-4">
              <div className="s6-icon">
                <img src="/images/svg//hours1.svg" alt="" />
              </div>
              <div className="s6-info">
                <p className="mb-0">For any queries, please reach us on</p>
                <h2 className="heading-2 secondaryColor">1800 313 99 99 77</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top">
          <div className="mt-5 container">
            <div className="row mx-auto">
              <div className="logo col-md-3 p-md-0 p-5">
                <Nav.Link href="/">
                  <img src="/images/logo.svg" alt="logo" />
                </Nav.Link>
              </div>
              <div className="d-flex align-items-start col-md-6 px-md-5 py-3 p-0">
                <div className="w-40">
                  <Nav className="nav-items d-flex flex-column">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/about-us"> About Us </Nav.Link>
                    <Nav.Link href="/rabies-and-you"> Rabies & You </Nav.Link>
                    <Nav.Link href="/rabies-and-doctor"> Rabies & Doctor </Nav.Link>
                  </Nav>
                </div>
                <div className="w-60">
                  <Nav className="nav-items d-flex flex-column">
                    <Nav.Link href="/about-us"> Bitten by a dog? </Nav.Link>
                    <Nav.Link href="/about-us"> Who are at risk? </Nav.Link>
                    <Nav.Link href="/about-us "> Oath </Nav.Link>
                    <Nav.Link href="/pre-exposure-vaccination"> Pre Exposure Vaccination </Nav.Link>
                    <Nav.Link href="/rabies-vaccine-schedule"> Rabies Vaccine Schedule </Nav.Link>
                  </Nav>
                </div>
              </div>
              <div className="f-ns col-md-3 p-md-0 p-4">
                <NewsLetter />
              </div>
            </div>

            <div>
              <div className="socialIcons d-flex justify-content-center gap-2 p4-3 mb-3">
                <Nav.Link href="/">
                  <img src="/images/social/facebook.png" alt="facebook" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="/images/social/twitter.png" alt="twitter" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="/images/social/instagram.png" alt="instagram" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="/images/social/linkedin.png" alt="linkedin" />
                </Nav.Link>
                <Nav.Link href="/">
                  <img src="/images/social/youtube.png" alt="youtube" />
                </Nav.Link>
              </div>
              <p className="text-center">
                An initiative by Human Biologicals Institute. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light">
          <div className="container mx-auto row py-5 px-md-0 p-3">
            <div className="col-md-3 mb-3">
              <Nav.Link href="/">
                <img src="/images/hbi_logo.png" alt="HBILogo" className="img-fluid" />
              </Nav.Link>
            </div>
            <div className="col-md-9">
              <p className="small mb-0">
                <span className="fw-bold"> Disclaimer: </span> The data
                contained in this website is intended for general reference only
                and is meant for viewers in India only. It may refer to
                pharmaceutical products, diagnostic techniques, therapeutics or
                indications not yet registered or approved in a given country
                and it should be noted that, over time, currency and
                completeness of the data may change. For updated information,
                please contact the Company. This data should not be used to
                diagnose, treat, cure or prevent any disease without the
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
                local Drug Safety Unit at {" "}
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
      border: 2px dashed var(--secondaryColor);
      border-radius: 15px;
      background-color: aliceblue;
      transition: 0.3s;
      .s6-icon {
        width: 55px;
        height: auto;
      }
      &:hover {
        background-color: var(--primaryColor);
        p,h2 {
          color: var(--whiteColor);
        }
      }
    }
  }

  a {
    color: inherit;
    &:hover {
      color: var(--primaryColor);
    }
  }
  .f-ns {
    label { color: var(--blackColor); }
    input {
      background-color: #f1f1f1;
      width: 100%;
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
  .socialIcons img {
    width: 35px;
  }
  .logo img {
    width: 90%%;
  }
`;
