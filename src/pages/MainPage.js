import React, { useState } from 'react';
import CardLocation from '../components/CardLocation';
import { locations } from '../data/locations';
import {
  Card,
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Image,
  Item,
  Message,
} from 'semantic-ui-react';
import { Map, TileLayer } from 'react-leaflet';
import Bild from '../data/images/tyresta.jpg';

/**
 * todo - display map
 */

const MainPage = () => {
  const [state, setstate] = useState({
    lat: 59.3212835,
    lng: 17.9754377,
    zoom: 6,
  });

  const position = [state.lat, state.lng];

  const allLocations = locations.map((location) => (
    <CardLocation key={location.id} location={location} />
  ));

  return (
    <React.Fragment>
      <Header size="huge" content="My Camping Map" textAlign="center" />
      <Grid centered>
        <GridColumn width={14}>
          <div style={{ height: '50vh' }}>
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
      <Grid centered>
        <GridRow>
          <Header size="large" content="Som Sub header about the cards" />
        </GridRow>
        <GridRow>
          <Header
            size="medium"
            color="grey"
            content="Som Sub header about the cards"
          />
        </GridRow>
      </Grid>
      <Grid centered>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Card fluid>
              <Image src={Bild} />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image src={Bild} />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Image src={Bild} />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default MainPage;
