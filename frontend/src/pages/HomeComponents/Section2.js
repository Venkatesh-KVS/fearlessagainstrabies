import React from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

export default function Section2() {
  return (
    <Wrapper>
      <div className="S2 container d-md-flex justify-content-center align-items-center gap-3 p-md-0 px-4">
        <Card className="s2Card mb-md-0 mb-3">
          <Card.Img
            variant="top"
            src="/images/paw.svg"
            style={{ width: "50px" }}
            className="position-absolute position-t30 position-r30"
          />
          <Card.Body>
            <Card.Title className="heading-2">
              <h2 className="whiteColor">RABIES & YOU</h2>
            </Card.Title>
            <Card.Text className="whiteColor">
              What strikes first to your mind when you hear ‘rabies’? A dog bite
              that leads to death – most of us have the same thought.
            </Card.Text>
            <Nav.Link href="/rabies-and-you">
              <Button variant="btn btn-outline-secondary">View More</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
        <Card className="s2Card s2C2">
          <Card.Img
            variant="top"
            src="/images/paw_doctor.svg"
            style={{ width: "50px" }}
            className="absolute position-t30 position-r30"
          />
          <Card.Body>
            <Card.Title className="heading-2">
              <h2 className="whiteColor">RABIES & DOCTOR</h2>
            </Card.Title>
            <Card.Text className="whiteColor">
              Be up-to-date and provide the best to your patients
            </Card.Text>
            <Nav.Link href="/rabies-and-doctor">
              <Button variant="whiteColor">View More</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
.S2 {
  .s2Card {
    width: 30rem;
    height: 300px;
    background-color: var(--primaryColor);
    color: #cdcdcd;
    background-image: url("./images/svg/dots.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px;
    border-radius: 25px;
  }
  .s2C2 {
    background-color: var(--secondaryColor);
  }
  button {
    color: var(--whiteColor);
    border: 2px solid #ffffff50;
    &:hover {
      color: var(--textColor);
      background-color: var(--whiteColor);
    }
  }
}
@media only screen and (max-width: 600px) {
  .s2Card {
      width: 100% !important;
      padding: 20px !important;
      height: auto !important;
    }
}
`;
