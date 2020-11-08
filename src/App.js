import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Container, Header, Item, Message } from 'semantic-ui-react';

import { locations } from './data/locations';

import './App.css';
import CardLocation from './components/CardLocation';
/**
 * todo - Navbar
 * todo - Same trip => same color on pins...
 */

const App = () => {
  const [state, setstate] = useState({
    lat: 59.3212835,
    lng: 17.9754377,
    zoom: 8,
  });

  const position = [state.lat, state.lng];

  const allLocations = locations.map((location) => (
    <CardLocation key={location.id} location={location} />
  ));

  return (
    <div className="App">
      <Container>
        <Item>
          <Header as="h1" content="My Camping Map" textAlign="center" />
        </Item>
        <item>
          <Message>
            <Message.Header>Info</Message.Header>
            <Message.List>
              <Message.Item>Total pins : {locations.length}</Message.Item>
            </Message.List>
          </Message>
        </item>
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
