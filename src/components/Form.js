import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export const RegisterRabiesEducation = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_8xkoe6k";
    const templateId = "template_yw15smf";
    const publicKey = "58JkgK72qjAJ_jugf";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        to_name: name,
        from_email: email,
        from_name: "Register Rabies Education",
        address: address,
        number: number,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setAddress("");
      setNumber("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <div className="form-fields ">
          <TextField
            required
            type="text"
            id="filled-basic"
            label="Your School Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="filled-basic"
            label="Your School Address"
            variant="filled"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            required
            id="filled-basic"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="filled-basic"
            label="Number"
            type="number"
            variant="filled"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" variant="contained" className="bton btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [nlSubmitedMsg, setNlSubmitedMsg] = useState(null);

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
        from_email: email,
        from_name: "News Letter",
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (res.data === "OK") {
        setNlSubmitedMsg("success");
      } else {
        setNlSubmitedMsg("error");
      }
      console.log(res.data);
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <h3 className="heading-3">Subscribe to the newsletter</h3>
          </label>

          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" variant="contained" className="btn">
          Submit
        </button>
        {nlSubmitedMsg === "success" && (
          <p className="successMsg text-success small">
            Newsletter subscribed successfully!
          </p>
        )}
      </form>
    </div>
  );
};
