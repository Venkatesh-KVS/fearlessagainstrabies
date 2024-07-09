import React from "react";
import styled from "styled-components";

export const DiagnosingRabies = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-7">
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
        <div className="col-md-5">
          <img src="/images/mask/doctor2_dog.jpg" alt="" />
        </div>
      </div>
      <div className="">
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
const Wrapper = styled.section`
  img {
    mask-image: url("/images/mask/pawprint.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    width: 100%;
  }
`;
