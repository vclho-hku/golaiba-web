import GoogleMapReact from 'google-map-react';

const HK_CENTER: any = [22.302711, 114.177216];

const MapContainer = (props: any) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBDEus5_ytavJIUHfloOiKvRyFSEghoQkI' }}
        defaultCenter={HK_CENTER}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};

export default MapContainer;
