// ---------------------------------
// This is old PreExposureVaccination page with Tabs wise navigation
// ---------------------------------

import React from "react";
import styled from "styled-components";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { AboutTab } from "../components/AboutTab";
import { BittenByAdogContent } from "../components/BittenByAdogContent";
import { WhoAreAtRiskContent } from "../components/WhoAreAtRiskContent";
import { OathContent } from "../components/OathContent";
import { PEV } from "../components/PEV";

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

const PreExposureVaccination = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <div className="PeV">
        <div className="pageBanner PeV-banner d-flex align-items-end">
          <div className="row container mx-auto p-md-5 px-2">
            <div className="col-md-6"></div>
            <div className="col-md-6 px-4">
              <h3 className="heading-3 text-white m-0">LEARN ABOUT PRE EXPOSURE VACCINATION</h3>
              <h1 className="heading-1 primaryColor">Protect Yourself</h1>
            </div>
          </div>
        </div>
        <div className="aboutTabs container">
          <div className="tabs d-md-flex">
            <div className="tabTitles">
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
              >
                <Tab className="tabTitle" label="Pre Exposure Vaccination" />
                <Tab className="tabTitle" label="About us" />
                <Tab className="tabTitle" label="Bitten by a dog" />
                <Tab className="tabTitle" label="Who are at risk?" />
                <Tab className="tabTitle" label="Oath" />
              </Tabs>
            </div>
            <div className="tabsContent">
              <TabPanel className="" value={value} index={0}>
                <PEV />
              </TabPanel>
              <TabPanel className="" value={value} index={1}>
                <AboutTab />
              </TabPanel>
              <TabPanel className="" value={value} index={2}>
                <BittenByAdogContent />
              </TabPanel>
              <TabPanel className="" value={value} index={3}>
                <WhoAreAtRiskContent />
              </TabPanel>
              <TabPanel className="" value={value} index={4}>
                <OathContent />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PreExposureVaccination;

const Wrapper = styled.section`
  .PeV {
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
  .PeV-banner {
    background-image: url("./images/banner/pre-exposure-vaccination-21.jpg");
    display: flex;
    justify-content: center;
    align-items: center;

    .bannerInfo {
      /* border: 2px solid red; */
      margin-bottom: -20%;
    }
  }

  @media (max-width: 768px) {
    h1 { line-height: 0.8em !important; }
    h3 { margin-bottom: 10px !important; }
    .tabs {
      margin: 25px auto !important;
      .tabTitles {
        width: 100%;
      }
      .tabTitle {
        width: auto;
        flex: 1 1 auto;
      }
      button {
        width: 100% !important;
      }
      .MuiTabs-root {
        flex-direction: row;
        overflow-x: auto;
      }
    }
    .MuiBox-root {
      padding: 0;
    }
  }
`;
