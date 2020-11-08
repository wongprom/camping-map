import imgTyresta from './images/tyresta.jpg';
/**
 /////* todo - add data from Tierp
 */

const locations = [
  {
    id: 1,
    placeName: 'Tyresta National Park',
    desc: 'First time camping with the family',
    date: 'Augusti 1, 2015',
    image: imgTyresta,
    gps: {
      lat: 59.1784654,
      lng: 18.261388,
    },
    typeOfPlace: 'Tent location',
  },
  {
    id: 2,
    placeName: 'Tyresta National Park',
    desc: 'Sitting by the camp fire.',
    date: 'Augusti 1, 2015',
    image: imgTyresta,
    gps: {
      lat: 59.1779705,
      lng: 18.2608677,
    },
    typeOfPlace: 'Fire location',
  },
  {
    id: 3,
    placeName: 'Dala alven, Tierp',
    desc: 'Descroption text',
    date: 'Oktober 15, 2020',
    image: imgTyresta,
    gps: {
      lat: 60.40608,
      lng: 17.29771,
    },
    typeOfPlace: 'Over landing',
  },
];

export { locations };
