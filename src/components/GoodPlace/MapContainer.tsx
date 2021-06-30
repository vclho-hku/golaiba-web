import GoogleMapReact from 'google-map-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MapPointer from './MapPointer';
import { PlacesList } from './MapSelectionData';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import Hidden from '@material-ui/core/Hidden';
import MapInfoPanel from './MapInfoPanel';

const HK_CENTER: any = [22.302711, 114.177216];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    list: {
      width: '350px',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      height: '100vh',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    sectionHeader: {
      backgroundColor: '#baad72',
      color: 'white',
      fontSize: '16px',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    itemContainer: {
      paddingLeft: '10px',
      paddingRight: '20px',
      width: '100%',
    },
  }),
);

const MapContainer = (props: any) => {
  const classes = useStyles();
  const placeList = PlacesList;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          marginTop: '20px',
        }}
      >
        <Hidden smUp>
          <MapInfoPanel />
        </Hidden>
      </div>
      <div className={classes.container}>
        <Hidden xsDown>
          <MapInfoPanel />
        </Hidden>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBDEus5_ytavJIUHfloOiKvRyFSEghoQkI',
            }}
            defaultCenter={HK_CENTER}
            defaultZoom={11}
          >
            {placeList.map((data) =>
              data.places.map((place) => (
                <MapPointer
                  key={place.id}
                  lat={place.lat}
                  lng={place.lng}
                  name={place.name}
                />
              )),
            )}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
