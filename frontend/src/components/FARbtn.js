import React from 'react';
import { NavLink } from "react-router-dom";

export default function FARbtn({ url }) {
  return (
    <NavLink to={url}>
        <button className='far-btn'>
            View more
        </button>
    </NavLink>
  )
}
