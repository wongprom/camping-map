// import React, { useEffect, useState } from 'react';
// import { Marker, Popup, Map, TileLayer } from 'react-leaflet';
// import { locations } from '../data/locations';
// import L from 'leaflet';

// import { Container, Item } from 'semantic-ui-react';

// delete L.Icon.Default.prototype._getIconUrl;

// L.icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const TestLeaf = (params) => {
//   const [state, setstate] = useState({
//     lat: 38.9072,
//     lng: -77.0369,
//     zoom: 13,
//   });

//   const position = [state.lat, state.lng];

//   console.log('locations', locations);

//   // let marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(Map);
//   return (
//     <Map center={position} zoom={state.zoom}>
//       <TileLayer
//         attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
//         url="https://api.mapbox.com/styles/v1/wongprom/ckezy08a316b419o4z26tdvnk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid29uZ3Byb20iLCJhIjoiY2tlenkzeDN0MGU3OTJybnhncWVoZWJuMiJ9.0JDah3d27tb6l5kHInrUMA"
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </Map>
//   );
// };
// export default TestLeaf;

// // https://api.mapbox.com/styles/v1/wongprom/ckezy08a316b419o4z26tdvnk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid29uZ3Byb20iLCJhIjoiY2tlenkzeDN0MGU3OTJybnhncWVoZWJuMiJ9.0JDah3d27tb6l5kHInrUMA

// //* Map box
// // mapbox://styles/wongprom/ckezy08a316b419o4z26tdvnk
// // Token name : pk.eyJ1Ijoid29uZ3Byb20iLCJhIjoiY2tlenkzeDN0MGU3OTJybnhncWVoZWJuMiJ9.0JDah3d27tb6l5kHInrUMA
