import React from "react";
import styled from "styled-components";
import ContactUsForm from "./ContactUsForm ";

function ContactUsFormWrpr({ doctorDetails }) {
  return (
    <Wrapper className="row">
      <div className="col-md-5">
        <h2 className="mb-3">Contact Us</h2>
        <p className="text fw-light">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis
          adipisci unde. Possimus necessitatibus repudiandae sunt error
          asperiores similique autem veritatis ex dicta, aspernatur voluptatum
          excepturi sed aut quisquam voluptates repellendus cum. Atque quasi,
          aut blanditiis molestiae odio nam omnis reprehenderit vel, quisquam
          ipsam distinctio consequuntur explicabo. Pariatur, optio et!{" "}
        </p>
      </div>
      <div className="col-md-7">
        <div className="row rounded-4 bg-white w-100">
          <ContactUsForm doctorDetails={doctorDetails} />
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactUsFormWrpr;

const Wrapper = styled.section``;
