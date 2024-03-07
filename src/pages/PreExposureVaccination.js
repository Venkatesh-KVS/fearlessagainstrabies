import React from "react";
import styled from "styled-components";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { AboutTab } from "../components/AboutTab";
import { BittenByAdog } from "../components/BittenByAdog";
import { WhoAreAtRisk } from "../components/WhoAreAtRisk";
import { Oath } from "../components/Oath";
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
        <div className="pageBanner PeV-banner ">
          <div className="bannerInfo container">
            <div className="left w-50 "></div>
            <div className="right w-50 ">
              <h3 className="heading-3 textColor m-0">
                LEARN ABOUT PRE EXPOSURE VACCINATION
              </h3>
              <h1 className="heading-1 primaryColor">protect yourself</h1>
            </div>
          </div>
        </div>
        <div className="aboutTabs container">
          <div className="tabs d-flex">
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
                <BittenByAdog />
              </TabPanel>
              <TabPanel className="" value={value} index={3}>
                <WhoAreAtRisk />
              </TabPanel>
              <TabPanel className="" value={value} index={4}>
                <Oath />
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
    background-image: url("./images/banner/pre-exposure-vaccination.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    .bannerInfo {
      border: 2px solid red;
    }
  }
`;
