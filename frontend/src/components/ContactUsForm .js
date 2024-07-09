import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import BASE_API_URL from "../apis/index";
import ContactUsFormSumbitPopup from "./ContactUsFormSumbitPopup";

const ContactUsForm = ({ doctorDetails }) => {
  const [showPopup, setShowPopup] = useState({ show: false, message: '', severity: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    doc_name: doctorDetails.doctor_name,
    doc_regid: doctorDetails.regd_id,
    doc_email: doctorDetails.email,
    caseType: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    setIsSubmitting(true);
    const submitContactFormData = async () => {
      try{
        const response = await axios.post(`${BASE_API_URL}/doctors/doctor-contact-form`, {formData});
        console.log(response.data);
        if(response.data.message === "Submitted!"){
          setIsSubmitting(false);
          setShowPopup({ show: true, message: response.data.message, severity: 'success' })
        }
      }catch(err){
        setIsSubmitting(false);
        setShowPopup({ show: true, message: 'Something went wrong', severity: 'error' });
      }
    }
    submitContactFormData();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: "100%", mx: "auto" }}
    >
      <div className="row">
        <div className="col-md-5">
          <TextField
            label="Registered Id"
            name="doc_regid"
            value={formData.doc_regid}
            onChange={handleChange}
            fullWidth
            margin="dense"
            disabled
            size="small"
          />
        </div>
        <div className="col-md-7 ps-md-0">
          <TextField
            label="Dcotor Email"
            name="doc_email"
            value={formData.doc_email}
            onChange={handleChange}
            fullWidth
            margin="dense"
            disabled
            size="small"
          />
        </div>
      </div>
      <TextField
        select
        label="Regarding"
        name="caseType"
        value={formData.caseType}
        onChange={handleChange}
        fullWidth
        required
        margin="dense"
        size="small"
      >
        <MenuItem value="Case Studies">Case Studies</MenuItem>
        <MenuItem value="Clinical Trials">Clinical Trials</MenuItem>
        <MenuItem value="Resources">Resources</MenuItem>
      </TextField>
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={8}
        fullWidth
        required
        margin="dense"
        size="small"
      />
      <button
        type="submit"
        className="button_1 mt-2 rounded p-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wait' : 'Submit'}
      </button>

      <ContactUsFormSumbitPopup
        show={showPopup.show}
        onHide={() => { 
          setShowPopup(false);
          setTimeout(() => { window.location.reload(); }, 500)
        }}
      />
    </Box>
  );
};

export default ContactUsForm;
