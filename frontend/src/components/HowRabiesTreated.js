import React from "react";
import styled from "styled-components";

export const HowRabiesTreated = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-7">
          <h2 className="heading-2">How is rabies treated?</h2>
          <p>
            Rabies is usually fatal as there's no effective treatment for this
            disease. Hence, it is very important to seek immediate medical
            attention when an animal bites or scratches you or you think you've
            been exposed to rabies; you may receive a series of vaccine shots to
            prevent the infection.
          </p>
          <p>
            Rabies can be prevented by rabies vaccine, made from killed
            (attenuated) rabies virus. This vaccine is given after considering
            various factors, including:
          </p>

          <ul>
            <li>The circumstance of the bite - provoked or unprovoked</li>
            <li>The type of animal – wild or domestic</li>
            <li>History of animal vaccination</li>
            <li>
              Information regarding the circumstance surrounding the bite from
              local health authorities
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <img src="/images/mask/doctor_dog.jpg" alt="doctor_dog" />
        </div>
      </div>
      <div>
        <p>
          If the animal that has bitten you is known to have rabies, the rabies
          vaccine is given. But, if the animal cannot be found, it is safe to
          assume that the animal has rabies and begin the treatment.
        </p>
        <p>It is always advisable to</p>
        <h2 className="heading-2">
          There are two types of rabies shots, which include:
        </h2>
        <ul>
          <li>
            Rabies immune globulin, a fast-acting shot is given to prevent the
            virus from infecting you.
          </li>
          <li>
            This injection may be given near the spot where the animal bit.
          </li>
          <li>
            A series of rabies vaccines are given to help fight against the
            rabies virus.
          </li>
        </ul>
        <p>
          Rabies vaccine can be given pre-exposure or post-exposure; however,
          the immunization schedule differs
        </p>
        <p>
          For individuals who have not received rabies vaccine previously,
          postexposure prophylaxis includes administration of human rabies
          immune globulin (RIG) and rabies vaccine. Immunoglobulins (RIGs) are
          infiltrated at the site of the wound & rabies vaccine is administered
          as series of shots.
        </p>
        <p>
          People who travel to regions where rabies is widespread, who work with
          rabies in laboratory settings, pet owners can have pre-exposure
          vaccine. This is given on the days 0, 7 and 21 or 28.
        </p>
        <p>
          Despite pre-exposure vaccination, additional therapy after a rabies
          exposure is required. However, it eliminates the need for rabies
          immune globulin and reduces the number of doses of vaccine. This type
          of vaccination is important for individuals who are travelling to
          regions where immunizing products may not be available or where the
          biologics used may be of lesser quality; this would in-turn increase
          the risk of adverse events.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    mask-image: url("/images/mask/pawprint.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    width: 100%;
  }
`;
