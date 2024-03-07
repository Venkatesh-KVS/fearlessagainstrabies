import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export default function RabiesAndDoctor() {
  return (
    <Wrapper>
      <div className="pageBanner"></div>
      <div className="RaD container  ">
        <div className="form mt-5">
          <TextField
            required
            id="filled-required"
            type="number"
            className="w-30"
            label="Register Phone Number"
            variant="filled"
          />
          <TextField
            required
            id="filled-password-input"
            type="password"
            className="w-30"
            label="Password"
            variant="filled"
            autoComplete="current-password"
          />
        </div>
        <div className="loginBth">
          <Button className="frmBtn" variant="contained">
            Login
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .pageBanner {
    height: 48vh;
    background-image: url("./images/banner/login.jpg");
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
`;
