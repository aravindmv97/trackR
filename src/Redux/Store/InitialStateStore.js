export const initialstate = {
  drawerIsOpen: true,
  snackbarIsOpen: false,
  highlightedVehicle: null,
  vehicle_data: [
    {
      vehicle_type: 'car',
      vehicle_name: 'Wagnor truck',
      vehicle_number: 'UK07',
      lat: 13.037166,
      lng: 77.622163,
      accidents: 0
    },
    {
      vehicle_type: 'bike',
      vehicle_name: 'WagnorR',
      vehicle_number: 'UKJ89',
      lat: 13.051397,
      lng: 77.610574,
      accidents: 1
    },
    {
      vehicle_type: 'truck',
      vehicle_name: 'UP80',
      vehicle_number: 'DB89',
      lat: 13.046037,
      lng: 77.622115,
      accidents: 6
    },
    {
      vehicle_type: 'van',
      vehicle_name: 'Truck',
      vehicle_number: 'UHJ89',
      lat: 13.036948,
      lng: 77.603585,
      accidents: 3
    },
    {
      vehicle_type: 'car',
      vehicle_name: 'Wagnor',
      vehicle_number: 'UKG07',
      lat: 13.048456,
      lng: 77.598497,
      accidents: 4
    },
  ],
  map_marker: []
};