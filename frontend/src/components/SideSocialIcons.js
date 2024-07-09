import React from 'react';
import styled from 'styled-components';

const SideSocialIcons = () => {
    return (
        <SideSocialIconsWrapper>
            <ul>
                <li className="facebook">
                    <a href="https://www.facebook.com/FearlessAgainstRabies" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li className="instagram">
                    <a href="https://www.instagram.com/fearless_against_rabies" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="linkedin">
                    <a href="https://www.linkedin.com/company/fearless-against-rabies-hbi" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="twitter">
                    <a href="https://twitter.com/F_AgainstRabies" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </li>
                <li className="youtube">
                    <a href="https://www.youtube.com/channel/UCxx7DEVTtMbxy4yA-q4Ovvw" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </SideSocialIconsWrapper>
    );
};

export default SideSocialIcons;

const SideSocialIconsWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);
    background-color: white;
    border-radius: 0 8px 8px 0;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    z-index: 20;

    ul {
        list-style: none;
        margin: 0;
        padding: 10px;
    }

    li {
        width: 40px;
        height: 40px;
        position: relative;
        background: #e59500;
        cursor: pointer;
        border-radius: 3px;
        margin: 5px 0;

        .fa-brands {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 22px;
            color: #fff;
        }

        &.facebook {
            background: #3b5998;
        }

        &.instagram {
            background: #f09433;
            background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
        }

        &.linkedin {
            background: #0077b5;
        }

        &.twitter {
            background: #000000;
        }

        &.youtube {
            background: #FF0000;
        }
    }
`;
