import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function SideMenu({ menuItems }) {
    return (
        <Wrapper>
            <Navbar className='siedeNavMenu rounded-4 shadow-sm overflow-hidden mb-4'>
                <Nav className='navItems flex-column w-100 py-0'>
                    {
                        menuItems.map((item, idx) => (
                            <NavLink
                                key={idx}
                                to={`/${item.link}`}
                                className='nav-link w-100'
                                activeClassName="active"
                                >
                                {item.title}
                            </NavLink>
                        ))
                    }
                </Nav>
            </Navbar>
        </Wrapper>
    );
}

const Wrapper = styled.div`
.siedeNavMenu {
  padding: 3px 1px;
  overflow: hidden;
  .navItems {
    .nav-link {
      font-size: 16px;
      transition: 0.2s;
      padding: 8px 15px;
      background-color: white;
      transition: 0.5s;
      &:hover {
        background-color: #f1f1f1;
      }
      &.active {
        color: white;
        background-color: var(--secondaryColor);
      }
    }
  }
}
`
