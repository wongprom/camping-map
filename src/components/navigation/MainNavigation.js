import React from 'react';
import { NavLink, Router } from 'react-router-dom';

import './mainNavigation.css';
/**
 * todo - style navbar
 /////* todo - remove space above navbar
 * todo - better solution for active link
 * todo - make responsive
 */

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mainPage"
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            SignIn/SignOut
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allPlaces"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            All Places
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
