import React from "react";
import styled from "styled-components";

export const HWIKIHR = () => {
  return (
    <Wrapper>
      <div className="HW-r1 tabBox">
        <div className="HW-c1 w-60">
          <h2 className="heading-2">How will I know if I have rabies?</h2>
          <p>
            After the virus enters the human body, it should travel to the brain
            to produce any symptoms. This time between the exposure and the
            presentation of symptoms is called the incubation period, which may
            last from a few days to months.
          </p>
          <p>
            Sometimes, the infection may produce early signs that indicate the
            onset of a disease, even before the diagnostically specific signs
            and symptoms develop. These signs include:
          </p>
          <ul>
            <li>Pain and/or itching at the site of bite</li>
            <li>Fever</li>
            <li>Nausea and vomiting</li>
            <li>Sensitivity to changes in temperature</li>
          </ul>
        </div>
        <div className="HW-c2 w-40">
          <img src="./images/mask/child_dog.jpg" alt="" />
        </div>
      </div>
      <div className="h-s2 bgPrimary p-4 my-4 w-70 rounded-3">
        <p className="m-0">
          Rabies can occur in two different forms – ‘furious’ rabies and
          ‘paralytic’ rabies.
        </p>
      </div>
      <p>
        Furious rabies accounts for nearly 70-80% cases. It is presented as
        hyperactivity, hydrophobia (fear of water) and sometimes aerophobia
        (fear of air currents or of fresh air). This type of rabies results in
        death in a few days due to cardio-respiratory arrest.
      </p>
      <p>
        Paralytic rabies comprises of around 20-30% cases. This type of disease
        manifests as a gradual paralysis of muscles, beginning at the site of
        bite or scratch, which progresses towards the central nervous system.
        Ultimately, the patient suffers from coma, followed by death. Such
        patients can survive for 1 to 2 weeks or longer.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .h-s2 {
    background-color: #004298;
    p {
      color: var(--whiteColor);
    }
  }
`;
