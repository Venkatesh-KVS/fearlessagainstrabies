import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

export const Testing = () => {
  const sendMessage = async (num) => {
    try {
      const response = await axios.get("http://localhost:1234/sendSMS");
      console.log(num, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 border">
      <Button variant="outlined" onClick={() => sendMessage("8686234535")}>
        Outlined
      </Button>
    </div>
  );
};
