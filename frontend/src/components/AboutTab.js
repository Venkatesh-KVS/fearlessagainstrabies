import React from "react";
import styled from "styled-components";

export const AboutTab = () => {
  return (
    <Wrapper>
      <div className="aboutTab">
        <div className="aT_r1 tabBox">
          <div className="AT_c1 w-60">
            <h2 className="heading-2">About Fearless Against Rabies</h2>
            <p>
              ‘Fearless Against Rabies’ is an initiative by Human Biologicals
              Institute. to educate about rabies and to reduce the incidence of
              the disease. Rabies is a deadly disease that attacks the central
              nervous system of an individual and has symptoms like
              hyperactivity and fear of water (hydrophobia). Children are the
              common victims of this disease as they are easy catch for the
              rabid animals.
            </p>
            <p>
              ‘Fearless Against Rabies’ aims to create awareness about the
              disease and measures to prevent it. Thus, helping you to be
              ‘fearless’ against the disease and let your children and pets have
              a healthy bond.
            </p>
            <p>
              Rabies is a deadly disease that leads to death in majority of the
              cases; there are very few survivors in the world. About 18,000 to
              20,000 cases of rabies are reported in India every year. According
              to the World Health Organization, India accounts for 36% of rabies
              deaths throughout the world each year.
            </p>
            <p>
              Although rabies can occur when any rabid animal, like monkeys or
              bats, bites or scratches, dogs contribute to 99% of all rabies
              transmitted to humans.
            </p>
          </div>
          <div className="AT_c2 w-40">
            <img src="./images/mask/doctor_dog.jpg" alt="" />
          </div>
        </div>
        <div className="aT_r2">
          <h2 className="heading-2">
            Rabies can be prevented by pre-exposure vaccination.
          </h2>
          <p>
            Rabies is usually treated with a post-exposure prophylactic rabies
            vaccine. However, this vaccine can be given before exposure to
            individuals who are at risk of rabies; this includes children,
            regular runners or walkers, pet owners, animal control and wildlife
            officers, and individuals who work in laboratory settings or those
            visiting areas where rabies is endemic. Pre-exposure vaccination
            eliminates the need for rabies immune globulin and reduces the
            number of doses of vaccine to be given after being exposed to
            rabies.
          </p>
          <p>
            With pre-exposure vaccination, you can now enjoy your morning jog
            and let your children play with the pets without any worry.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .AT_c2 {
    img {
      mask-image: url("./images/mask/pawprint.svg");
      mask-repeat: no-repeat;
      mask-size: contain;
      mask-position: center;
      width: 100%;
    }
  }
`;
