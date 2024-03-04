import React from "react";
import { NavLink } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const Oath = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="heading-2">
          <span className="primaryColor">4048 </span>people have taken the
          <span className="secondaryColor"> Oath </span>to fight against rabies
        </h1>
        <div className="oath ">
          <div className="oath-form">
            I &nbsp;
            <TextField
              label="Your name"
              id="standard-size-normal"
              defaultValue=""
              variant="standard"
            />
            &nbsp; Your name understand that rabies is a fatal disease that is
            majorly transmitted through rabid animals. I am aware that rabies
            can be 100% prevented by vaccinating the pets and humans. I take the
            oath to spread awareness among my family and friends regarding the
            rabies pre-exposure and post-exposure vaccination and be a part in
            making the world free from rabies.
          </div>
          <div className="oath-btm text-center">
            <Button variant="contained">Oath</Button>
            <div className="share-icons">
              <NavLink
                to={
                  "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Ft%3DLet%2Byour%2Bchild%2Bbe%2Bfearless%2BProtect%2Bfrom%2Brabies%26u%3Dhttps%253A%252F%252Ffearlessagainstrabies.com%252Foath&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                }
              >
                <div className="icons fb">
                  <img src="./images/svg/facebook.svg" alt="" />
                  share
                </div>
              </NavLink>
              <NavLink
                to={
                  "https://twitter.com/intent/post?text=Let%20your%20child%20be%20fearless%20Protect%20from%20rabies&url=https%3A%2F%2Ffearlessagainstrabies.com%2Foath"
                }
              >
                <div className="icons twitter">
                  <img src="./images/svg/twitter.svg" alt="" />
                  tweet
                </div>
              </NavLink>
              <NavLink to={"#"}>
                <div className="icons wp">
                  <img src="./images/svg/whatsapp.svg" alt="" />
                  tweet
                </div>
              </NavLink>
              <NavLink to={"#"}>
                <div className="icons linkedin">
                  <img src="./images/svg/linkedin.svg" alt="" />
                  share
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .oath {
    border: 3px dashed var(--primaryColor);
    padding: 35px;
    margin: 35px auto;
    text-align: center;
  }
  .oath-form {
    margin: 35px 0;
    .MuiFormControl-root {
      margin-top: -28px;
      #standard-size-normal {
        &::placeholder {
          color: red;
        }
      }
    }
  }
  button {
    color: var(--whiteColor) !important;
    background-color: var(--primaryColor);
    text-transform: capitalize;
    &:hover {
      background-color: var(--secondaryColor);
    }
  }
  .oath-btm {
    .share-icons {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
    }
    .icons {
      display: flex;
      color: #fff;
      font-size: 12px;
      background-color: green;
      justify-content: center;
      align-items: center;
      padding: 0 15px 0 0;

      img {
        width: 35px;
        height: 35px;
        padding: 10px;
      }
    }
    .fb {
      background-color: #4267b2;
    }
    .twitter {
      background-color: #000000;
    }
    .wp {
      background-color: #25d366;
    }
    .linkedin {
      background-color: #0077b5;
    }
  }
`;
