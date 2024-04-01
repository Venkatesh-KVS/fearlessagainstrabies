import React from "react";
import styled from "styled-components";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import CaseStudies from "../components/RabiesAndDoctors/CaseStudies";
import ClinicalTrials from "../components/RabiesAndDoctors/ClinicalTrials";
import Resources from "../components/RabiesAndDoctors/Resources";

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const DoctorsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <div className="RaY">
        <div className="aboutTabs container">
          <div className="tabs d-flex">
            <div className="tabTitles">
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
              >
                <Tab className="tabTitle" label="Case Studies" />
                <Tab className="tabTitle" label="Clinical Trials" />
                <Tab className="tabTitle" label="Resources" />
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
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DoctorsPage;
const Wrapper = styled.section`
  .RaY {
    .tabs {
      margin: 65px auto;
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
    background-image: url("./images/banner/about-us.jpg");
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
`;
