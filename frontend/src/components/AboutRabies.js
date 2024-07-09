import React from "react";
import styled from "styled-components";

export const AboutRabies = () => {
  return (
    <Wrapper>
      <div className="aboutRabies">
        <div>
          <h2 className="heading-2">About Rabies</h2>
          <p>
            What strikes first to your mind when you hear ‘rabies’? A dog bite
            that leads to death – most of us have the same thought. Ever wonder
            how these happy and innocent animals can transmit such a fatal
            disease? Well, let us understand better by learning about the
            disease.
          </p>
        </div>
        <div className="row">
          <div className="AT_c1 col-md-7">
            <h3 className="heading-3">What is Rabies?</h3>
            <p>
              Rabies is a deadly disease caused by rabies virus, which mainly
              affects the animals. This disease can be transmitted to humans
              through the infected saliva of the animals via bites or scratches.
              The virus infects the central nervous system of the mammals and
              causes various symptoms. If the person is not treated immediately,
              the disease can spread to the brain and cause death. However, this
              disease can be prevented by vaccines.
            </p>
            <h3 className="heading-3">Transmission of rabies to humans:</h3>
            <p>
              The infection spreads when an infected animal bites or scratches a
              human being. However, the infection is not spread by touching or
              feeding the animal, or when the animal licks. A majority of the
              rabies cases are caused by dog bites. But other animals like cats,
              monkeys, bats, wolves, and jackals can also transmit the disease.
            </p>
            <p>
              Rarely, the infection can spread when the saliva contacts an open
              wound or the mucous membranes, like the eyes or mouth. This may
              happen when an animal licks an open cut on the skin.
            </p>
          </div>
          <div className="col-md-5">
            <img src="/images/mask/women_dog.jpg" alt="womenDog" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
img {
  mask-image: url("/images/mask/pawprint.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  width: 100%;
}
`;
