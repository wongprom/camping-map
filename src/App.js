import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Container, Header } from 'semantic-ui-react';

import { locations } from './data/locations';

import './App.css';
import CardLocation from './components/CardLocation';

const App = () => {
  const [state, setstate] = useState({
    lat: 59.3212835,
    lng: 17.9754377,
    zoom: 10,
  });

  const position = [state.lat, state.lng];

  const allLocations = locations.map((location) => (
    <CardLocation key={location.id} location={location} />
  ));

  return (
    <div className="App">
      <Container>
        <Header content="My Camping Map" textAlign="center" />
      </Container>
      <Map center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {allLocations}
      </Map>
    </div>
  );
};

export default App;
