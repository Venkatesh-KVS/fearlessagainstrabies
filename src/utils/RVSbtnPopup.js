import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RVSbtnPopup = ({ onClose, onSubmit }) => {
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = () => {
    // Call onSubmit callback with the entered number
    onSubmit(number);
  };
  return (
    <div>
      <div className="popup mt-3">
        <Box className="popup-inner" sx={style}>
          <h3 className="heading-4">Enter your mobile Number</h3>
          {/* <input
            type="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Enter a number"
          /> */}
          <TextField
            id="outlined-number"
            label="Number"
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </Box>
      </div>
    </div>
  );
};

export default RVSbtnPopup;
