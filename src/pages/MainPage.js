import React, { useState } from 'react';
import CardLocation from '../components/CardLocation';
import { locations } from '../data/locations';
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Item,
  Message,
} from 'semantic-ui-react';
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
      <Container fluid>
        <Item>
          <Header as="h1" content="My Camping Map" textAlign="center" />
        </Item>
        <Item>
          <Message>
            <Message.Header>Info</Message.Header>
            <Message.List>
              <Message.Item>Total pins : {locations.length}</Message.Item>
            </Message.List>
          </Message>
        </Item>
        <p>bättre</p>
        <Grid centered>
          <GridColumn width={14}>
            <div style={{ height: '70vh' }}>
              <Map center={position} zoom={state.zoom}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {allLocations}
              </Map>
            </div>
          </GridColumn>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainPage;
