import styled from "styled-components";
import DoctorsPage from "./DoctorsPage";

export default function RabiesAndDoctor({ auth, doctorId, setAuth, setDoctorId }) {
  return (
    <Wrapper>
      <div className="pageBanner"></div>
      <div className="  page-info">
        <div className="log_info">
          <DoctorsPage doctorId={doctorId} setDoctorId={setAuth} auth={auth} setAuth={setAuth} />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .pageBanner {
    height: 48vh;
    background-image: url("./images/banner/login-2.png");
    background-attachment: inherit;
    background-position: bottom;
  }
  .RaD {
    text-align: center;
    .form {
      margin: 35px auto;
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .frmBtn {
      background-color: var(--secondaryColor);
      &:hover {
        background-color: var(--primaryColor);
      }
    }
  }

  @media (max-width: 768px) {
    .pageBanner {
      height:100px;
      background-image: url("./images/banner/login-2.png");
    }
  }
`;
