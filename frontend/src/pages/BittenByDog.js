import React from 'react';
import styled from "styled-components";
import SideMenu from '../components/SideMenu';
import { BittenByAdogContent } from '../components/BittenByAdogContent';
import PageBanner from '../components/PageBanner';

function BittenByDog() {
  return (
    <Wrapper>
        <PageBanner bannerImg={"bitten-by-a-dog"} h1={"Get Vaccinated"} h3={"LET YOUR PET LOVE BE FEARLESS"} />
        <div className="container mx-auto px-md-5 p-4 mt-md-5">
            <div className='row gx-5'>
                <div className="col-md-3">
                    <SideMenu 
                        menuItems={[
                            {title: "About Us", link: "about-us"}, 
                            {title: "Bitten By A Dog", link: "bitten-by-a-dog"},
                            {title: "Who Are At Risk", link: "who-are-at-risk"},
                            {title: "Oath", link: "oath"},
                        ]}
                    />
                </div>
                <div className="col-md-9">
                  <BittenByAdogContent />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default BittenByDog

const Wrapper = styled.section``;