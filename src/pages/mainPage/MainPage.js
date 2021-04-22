import React, { useState } from 'react';
import CardLocation from '../../components/CardLocation';
import { locations } from '../../data/locations';
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
import Bild from '../../data/images/tyresta.jpg';

import './mainPage.css';

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
    <Container bg-color fluid>
      <Grid columns={2}>
        <GridRow>
          <GridColumn>
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

          <GridColumn>
            <div className="escape">
              <h1>Shhh...places we go to escape the crowds</h1>
              <p>
                If you care more about a great view than a great loo and prefer
                solitude to the social side of campsite life, a wild camping
                pitch might be the way to go.
              </p>
              <p>
                With wild camping, you can forget the rules and regulations of
                shared spaces and simply enjoy the great outdoors.
              </p>
              <p>
                Whether you’re hiking through a national park or just fancy
                sleeping under the stars, nothing beats the freedom of camping
                out on your own. Let our list of secret wild camping pitches
                inspire your next night out...
              </p>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
      <div className="cardsSection">
        <div className="movie-card">
          <div className="imageWrapper">
            <img src={Bild} />
          </div>
          <div className="movie-card__overlay"></div>
          <div className="movie-card__content">
            <div className="movie-card__header">
              <h1 className="movie-card__title">Tyresta national park</h1>
              <h4 className="movie-card__info">Augusti 1, 2015</h4>
            </div>
            <p className="movie-card__desc">
              First time the hole family went camping
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
