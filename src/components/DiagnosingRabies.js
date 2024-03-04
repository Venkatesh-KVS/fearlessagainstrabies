import React from "react";
import styled from "styled-components";

export const DiagnosingRabies = () => {
  return (
    <Wrapper>
      <div className="DR-r1 tabBox">
        <div className="DR-c1 w-60">
          <h2 className="heading-2">Diagnosing Rabies</h2>
          <p>
            Unfortunately, till date there is no single test available to
            diagnose human rabies infection. However, there are several tests
            that can help indicate rabies before death in humans.
          </p>
          <p>
            Tests are performed by collecting various samples like the saliva,
            serum, spinal fluid, and skin biopsies of hair follicles at the
            nape:
          </p>

          <ul>
            <li>
              Saliva is tested by virus isolation or reverse transcription -
              polymerase chain reaction (RT-PCR).
            </li>
            <li>
              Antibodies against the rabies virus are examined in the serum and
              spinal fluid sample.
            </li>
            <li>
              The rabies antigen in the cutaneous nerves at the base of hair
              follicles can be detected by examination of skin biopsy specimens.
            </li>
          </ul>
        </div>
        <div className="DR-c2 w-40">
          <img src="./images/mask/doctor2_dog.jpg" alt="" />
        </div>
      </div>
      <div className="DR-r2 ">
        <p className="m-0">
          There is no way to know if the animal has transmitted the rabies virus
          to you when the animal bites. Thus, the prevention of rabies infection
          is the first step taken, even if there is a slight possibility of
          being exposed to the virus.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
