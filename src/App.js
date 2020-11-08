import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Account from './pages/Account';
import Places from './pages/Places';

import './App.css';
/**
 * todo - Navbar => MainNavigation.js
 * ? Links to have => Logo , About, AllPlaces SignIn/SignOut, dashbord,
 * todo - Same trip => same color on pins...
 */

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/allPlaces">
            <Places />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
