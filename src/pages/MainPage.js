import React, { useState } from 'react';
import CardLocation from '../components/CardLocation';
import { locations } from '../data/locations';
import { Container, Header, Item, Message } from 'semantic-ui-react';
import { Map, TileLayer } from 'react-leaflet';

/**
 * todo - display map
 */

const MainPage = () => {
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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MainPage;
