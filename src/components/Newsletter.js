import axios from "axios";
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

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
        from_name: "Fearless Against Rabies",
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <div class="mb-3 ">
          <label htmlFor="exampleInputEmail1" class="form-label">
            <h3 className="heading-3">Subscribe to the newsletter</h3>
          </label>

          <input
            required
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" variant="contained" class="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
