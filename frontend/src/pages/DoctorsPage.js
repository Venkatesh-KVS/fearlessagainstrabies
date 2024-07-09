import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, Box } from "@mui/material";
import CaseStudies from "../components/RabiesAndDoctors/CaseStudies";
import ClinicalTrials from "../components/RabiesAndDoctors/ClinicalTrials";
import Resources from "../components/RabiesAndDoctors/Resources";
import { useNavigate } from 'react-router-dom';
import BASE_API_URL from "../apis/index";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DoctorInfoPopup from "../utils/DoctorInfoPopup";
import ContactUsFormWrpr from "../components/ContactUsFormWrpr";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

const DoctorsPage = ({ auth, doctorId, setAuth, setDoctorId }) => {
  const [value, setValue] = React.useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState([]);

  useEffect(() => {
    const fetchDoctorDetials = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/doctors/doctor-info/${doctorId}`);
        setDoctorDetails(response.data)
      } catch (err) { console.log(err) }
    }
    if (doctorId !== "") { fetchDoctorDetials() }
  }, [doctorId])

  const handleLogout = () => {
    localStorage.removeItem('doctorToken');
    setAuth(false);
    setDoctorId("");
    navigate('/login');
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <div className="RaY mt-md-5 bg-white">
        <div className="aboutTabs container">
          {
            auth ? (
              <div>
                <p className="x-small mb-0"> Welcome </p>
                {
                  doctorDetails.map((item, idx) => (
                    <Dropdown key={idx} as={ButtonGroup}>
                      <Button variant="outline" onClick={() => setShowPopup(true)}>
                        {item.doctor_name} - FAR_DOC{item.id}
                      </Button>

                      <Dropdown.Toggle split variant="outline" id="dropdown-split-basic" />

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleLogout()}> Logout </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ))
                }
              </div>
            ) : ("Login")
          }

          {
            auth && (
              <div className="tabs d-md-flex">
                <div className="tabTitles">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                  >
                    <Tab className="tabTitle" label="Case Studies" />
                    <Tab className="tabTitle" label="Clinical Trials" />
                    <Tab className="tabTitle" label="Resources" />
                    <Tab className="tabTitle" label="Contact Us" />
                  </Tabs>
                </div>
                <div className="tabsContent">
                  <TabPanel className="" value={value} index={0}>
                    <CaseStudies />
                  </TabPanel>
                  <TabPanel className="" value={value} index={1}>
                    <ClinicalTrials />
                  </TabPanel>
                  <TabPanel className="" value={value} index={2}>
                    <Resources />
                  </TabPanel>
                  <TabPanel className="" value={value} index={3}>
                    <ContactUsFormWrpr doctorDetails={ doctorDetails.length > 0 ? doctorDetails[0] : null } />
                  </TabPanel>
                </div>
              </div>
            )
          }
          
        </div>
      </div>

      <DoctorInfoPopup doctorDetails={doctorDetails} show={showPopup} onHide={() => { setShowPopup(false); }} />
    </Wrapper>
  );
};

export default DoctorsPage;

const Wrapper = styled.section`
  .RaY {
    .tabs {
      margin: 20px auto;
      .tabTitle {
        text-align: start;
        background-color: #f8f8f8;
        margin-bottom: 5px;
        text-transform: uppercase !important;
      }
      button {
        width: 250px;
        align-items: start;
        &:hover {
          color: var(--secondaryColor);
        }
      }
      .MuiTabs-indicator {
        background-color: var(--secondaryColor);
      }
    }
    .Mui-selected {
      color: var(--whiteColor);
      background-color: var(--secondaryColor) !important;
      &:hover {
        color: var(--whiteColor) !important;
      }
    }
    .MuiBox-root {
      padding: 0 35px;
    }
  }
  .RaY-banner {
    background-image: url("/images/banner/about-us.jpg");
    .right {
      vertical-align: center;
      justify-content: center;
      margin: auto 0px 100px;
      h1 {
        line-height: 1em;
      }
      h3 {
        font-family: inherit;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    .tabs {
      margin: 25px auto !important;
      button {
        width: 100% !important;
      }
      .MuiBox-root {
        padding: 0px 15px;
      }
    }

    .tabsContent{
      margin-top: 20px;
    }
  }
`;
