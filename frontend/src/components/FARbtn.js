import React from 'react';
import { NavLink } from "react-router-dom";

export default function FARbtn({ to }) {
  return (
    <NavLink to={to}>
        <button className='far-btn'>
            View more
        </button>
    </NavLink>
  )
}
