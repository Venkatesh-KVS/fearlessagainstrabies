import React from "react";
import styled from "styled-components";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { AboutTab } from "../components/AboutTab";
import { BittenByAdog } from "../components/BittenByAdog";
import { WhoAreAtRisk } from "../components/WhoAreAtRisk";
import { Oath } from "../components/Oath";

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

const AboutUs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <div className="about-us">
        <div className="pageBanner about-banner d-flex">
          <div className="left w-50 "></div>
          <div className="right w-50 ">
            <h3 className="heading-3 textColor m-0">EDUCATE & REDUCE</h3>
            <h1 className="heading-1 primaryColor">The Incidence of Rabies</h1>
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
                <Tab className="tabTitle" label="About Us" />
                <Tab className="tabTitle" label="Bitten by a dog" />
                <Tab className="tabTitle" label="Who are at risk" />
                <Tab className="tabTitle" label="Oath" />
              </Tabs>
            </div>
            <div className="tabsContent">
              <TabPanel className="" value={value} index={0}>
                <AboutTab />
              </TabPanel>
              <TabPanel className="" value={value} index={1}>
                <BittenByAdog />
              </TabPanel>
              <TabPanel className="" value={value} index={2}>
                <WhoAreAtRisk />
              </TabPanel>
              <TabPanel className="" value={value} index={3}>
                <Oath />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.section`
  .about-us {
    .tabs {
      margin: 65px auto;
      .tabTitle {
        background-color: #f8f8f8;
        margin-bottom: 5px;
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
  .about-banner {
    background-image: url("./images/banner/about-rabies.jpg");
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
