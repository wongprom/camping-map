import React from 'react';
import { NavLink, Router } from 'react-router-dom';
// Logo , About, AllPlaces SignIn/SignOut, dashbord,

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">SignIn/SignOut</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/allPlaces">All Places</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
