import React from 'react';
import styled from "styled-components";

function PageBanner({ bannerImg, h3, h1 }) {
    return (
        <Wrapper>
            <div className="dpageBanner d-flex align-items-end" style={{background: `url('./images/banner/${bannerImg}.jpg')`}}>
                <div className="row container mx-auto p-md-5 px-2">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 px-4">
                        <h3 className="heading-3 m-0 text-white"> {h3} </h3>
                        <h1 className="heading-1 primaryColor"> { h1 } </h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default PageBanner;

const Wrapper = styled.div`
.dpageBanner{
    margin-top: -168px;
    height: 60vh;
    background-position: top center;
    background-attachment: fixed !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    .right {
      vertical-align: center;
      justify-content: center;
      margin: auto 0px 100px;
      padding-top: 0;
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
.dpageBanner{
    margin-top: 0px;
    height: 40vh;
    background-position: left center !important;
    background-attachment: scroll !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    .right {
        padding-top: 100px !important;
      h1 {
        line-height: 1em;
      }
      h3 {
        font-family: inherit;
        font-weight: 600;
      }
    }
}
}
`