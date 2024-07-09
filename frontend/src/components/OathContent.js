import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const OathContent = () => {
  const [name, setName] = useState("");
  const [oathSubmitedMsg, setOathSubmitedMsg] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_8xkoe6k";
    const templateId = "template_p0uj2yt";
    const publicKey = "58JkgK72qjAJ_jugf";
    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: name,
        from_name: "Oath",
      },
    };
    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (res.data === "OK") {
        setOathSubmitedMsg("success");
      } else {
        setOathSubmitedMsg("error");
      }
      console.log(res.data);
      setOathSubmitedMsg("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper>
      <div id="oath">
        <h1 className="heading-2">
          <span className="primaryColor">4048 </span>people have taken the
          <span className="secondaryColor"> Oath </span>to fight against rabies
        </h1>
        <div className="oath">
          <form onSubmit={handleSubmit} className="oath-form">
            I &nbsp;
            <TextField
              required
              type="text"
              id="filled-basic"
              label="Your Name"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            &nbsp; Your name understand that rabies is a fatal disease that is
            majorly transmitted through rabid animals. I am aware that rabies
            can be 100% prevented by vaccinating the pets and humans. I take the
            oath to spread awareness among my family and friends regarding the
            rabies pre-exposure and post-exposure vaccination and be a part in
            making the world free from rabies.
          </form>
          <div className="oath-btm text-center">
            <Button type="submit" variant="contained">
              Oath
            </Button>
            {oathSubmitedMsg === "success" && (
              <p className="successMsg text-success small">
                Oath submitted successfully!
              </p>
            )}

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

const Wrapper = styled.div`
  .oath {
    border: 3px dashed var(--primaryColor);
    padding: 35px;
    margin: 35px auto;
    text-align: center;
  }
  .oath-form {
    margin: 35px 0;
    .MuiFormControl-root {
      margin-top: -30px;
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
