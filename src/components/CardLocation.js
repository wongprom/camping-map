import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pin from '../../node_modules/leaflet/dist/images/marker-icon.png';

import { Card, Icon } from 'semantic-ui-react';

const myIcon = L.icon({
  iconUrl: pin,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});
//? destruct gps {} ??
const CardLocation = ({ location }) => {
  const extra = (
    <p>
      Spot:
      <Icon name="fire" color="orange" />
    </p>
  );

  return (
    <Marker position={[location.gps.lat, location.gps.lng]} icon={myIcon}>
      <Popup>
        <Card
          image={location.image}
          header={location.placeName}
          description={location.desc}
          meta={location.date}
          extra={extra}
        />
      </Popup>
    </Marker>
  );
};

export default CardLocation;
