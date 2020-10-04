import React, { useEffect, useState } from 'react';
import { Marker, Popup, Map, TileLayer } from 'react-leaflet';
import { Card, Container, Icon, Image, Header } from 'semantic-ui-react';

import L from 'leaflet';
import TestLeaf from './components/TestLeaf';
import { locations } from './data/locations';
import pin from '../node_modules/leaflet/dist/images/marker-icon.png';
import './App.css';

const App = () => {
  const [state, setstate] = useState({
    lat: 59.3212835,
    lng: 17.9754377,
    zoom: 10,
  });

  const myIcon = L.icon({
    iconUrl: pin,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  const position = [state.lat, state.lng];

  console.log(locations);

  const locationCard = (
    <Card>
      <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );

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
        {locations.map((location) => {
          return (
            <Marker
              position={[location.location.lat, location.location.lng]}
              icon={myIcon}
            >
              <Popup>
                <Card>
                  <Image src={location.image} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{location.placeName}</Card.Header>
                    <Card.Meta>
                      <span className="date"> {location.date}</span>
                    </Card.Meta>
                    <Card.Description>{location.desc}</Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <Icon name="fire" color="orange" />
                    <p>{location.typeOfPlace}</p>
                  </Card.Content>
                </Card>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default App;
