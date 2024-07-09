import styled from "styled-components";

export const Vaccination = () => {
  return (
    <Wrapper>
      <div className="Vac-r1 row">
        <div className="Vac-c1 col-md-7">
          <h2 className="heading-2">Vaccination</h2>
          <p>
            Rabies vaccine is an active immunizing agent made of killed rabies
            virus. This vaccine protects the human body against infection of the
            rabies virus. This vaccine is given to individuals who have been
            exposed to the virus or who are at risk of the infection, before
            actually being exposed.
          </p>
          <p>
            The rabies vaccine is manufactured from inactivated strains of
            rabies virus. When the vaccine is administered, the rabies antigen
            (the inactivated virus) induces production of antibodies against the
            rabies virus. These antibodies provide immunity against the virus.
          </p>
          <p>Rabies vaccine can be administered in two ways –</p>
          <h3 className="heading-3">Post-exposure prophylaxis:</h3>
          <p>
            Individuals who have been exposed to the rabies vaccine by an animal
            bite or scratch that is known or thought to have rabies. This is
            also known as post-exposure prophylaxis.
          </p>
        </div>
        <div className="Vac-c2 col-md-5">
          <img src="/images/mask/man_dog.jpg" alt="" />
        </div>
      </div>
      <div>
        <p>
          This type of vaccination is typically given as an intramuscular
          injection on days 0, 3, 7, 14 and 28. Human rabies immune globulin is
          given on day 0, unless the patient has received rabies vaccination
          previously. Recently, intramuscular inoculation of the vaccine has
          been replaced with intradermal injections.
        </p>
        <p>
          According to the National Guidelines on Rabies Prophylaxis provided by
          National Centre for Disease Control, India, anti-rabies neutralizing
          antibody titre of 0.5 IU/ml or more in serum is effective for
          protecting the human body against the rabies virus. This protection is
          obtained by day 14 of a post-exposure prophylaxis in most healthy
          individuals. This can be achieved irrespective of the simultaneous
          administration of rabies immune globulin.
        </p>
        <h3 className="heading-3">Pre-exposure prophylaxis:</h3>
        <p>
          Individuals who are at high risk of getting infected with rabies virus
          can be administered with rabies vaccine. This is known as pre-exposure
          prophylaxis. This type of vaccination consists of intramuscular
          injection of 1 ml vaccine on days 0, 7, 21 and 28. Based on the
          vaccine manufacturer, booster doses can be recommended at 3–5-year
          intervals.
        </p>
        <p>
          However, the current treatment standard fails to prevent patient death
          once the rabies virus enters the central nervous system. This
          inability to treat these cases is attributed to the absence of
          effective anti-viral agents specific for rabies.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    mask-image: url("/images/mask/puppy.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    width: 100%;
  }
`;
