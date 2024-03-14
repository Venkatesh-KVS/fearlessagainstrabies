import styled from "styled-components";

export const SotV = () => {
  return (
    <Wrapper>
      <div className="SotV">
        <h2 className="heading-2">Safety of the rabies vaccine</h2>
        <h5 className="heading-5 primaryColor mb-4">
          Rabies vaccine is safe, and the risk of any serious harm is very less.
          However, it is associated with typical, mild problems such as:
        </h5>
        <div className="SotV-r ">
          <div className="SotV-c">
            <img src="./images/svg/soreness.svg" alt="" />
            <p>Soreness</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/redness.svg" alt="" />
            <p>Redness</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/swelling.svg" alt="" />
            <p>Swelling</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/itching.svg" alt="" />
            <p>Itching</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/headache.svg" alt="" />
            <p>Headache</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/nausea.svg" alt="" />
            <p>Nausea</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/abdominal_pain.svg" alt="" />
            <p>Abdominal pain</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/muscle_pain.svg" alt="" />
            <p>Muscle aches</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/dizziness.svg" alt="" />
            <p>Dizziness</p>
          </div>
        </div>
        <h5 className="heading-5 primaryColor mt-5 mb-4">
          Rarely, the vaccine can cause the following moderate to severe side
          effects:
        </h5>
        <div className="SotV-r">
          <div className="SotV-c">
            <img src="./images/svg/hives.svg" alt="" />
            <p>Hives</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/joint_pain.svg" alt="" />
            <p>Joint pain</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/fever.svg" alt="" />
            <p>Fever</p>
          </div>
        </div>
        <h5 className="heading-5 primaryColor mt-5 mb-4">
          Some individuals may have allergic to the rabies vaccines. Signs of a
          severe allergic reaction are:
        </h5>
        <div className="SotV-r">
          <div className="SotV-c">
            <img src="./images/svg/difficulty_breathing.svg" alt="" />
            <p>Difficulty breathing</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/wheezing.svg" alt="" />
            <p>Hoarseness or wheezing</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/hives.svg" alt="" />
            <p>Hives</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/paleness.svg" alt="" />
            <p>Paleness</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/weakness.svg" alt="" />
            <p>Weakness</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/rapid_heartbeat.svg" alt="" />
            <p>Rapid heartbeat</p>
          </div>
          <div className="SotV-c">
            <img src="./images/svg/dizziness.svg" alt="" />
            <p>Dizziness</p>
          </div>
        </div>
        <div className="SotV-2 p-3  my-4 ">
          <p className="whiteColor m-0">
            If you have any of these side effects, call you doctor immediately.
          </p>
        </div>
        <p>
          Usually, after injecting the vaccine, the patient is asked to wait in
          the doctor’s office or emergency room for 30 minutes to observe if any
          allergic reaction will occur.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .SotV-r {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    .SotV-c {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: center;
      padding: 25px;
      width: 120px;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-bottom: 2px solid var(--primaryColor);
      p {
        margin: 0;
      }
    }
  }
  .SotV-2 {
    margin-top: 35px !important;
    border-radius: 10px;
    background-color: #004298;
  }
`;
