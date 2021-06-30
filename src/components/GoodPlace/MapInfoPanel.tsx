import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { PlacesList } from './MapSelectionData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: '350px',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      height: '100vh',
      marginLeft: '20px',
      [theme.breakpoints.down('sm')]: {
        height: '50vh',
      },
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

const MapInfoPanel = (props: any) => {
  const classes = useStyles();
  const placeList = PlacesList;
  return (
    <div>
      <List className={classes.list} subheader={<li />}>
        {placeList.map((data) => (
          <li key={`section-${data.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader
                className={classes.sectionHeader}
              >{`${data.section}`}</ListSubheader>
              {data.places.map((place) => (
                <ListItem key={`${place.name}`}>
                  <div className={classes.itemContainer}>
                    <div
                      style={{
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                      }}
                    >
                      {place.name}
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      <Typography variant="subtitle2">
                        {place.address}
                      </Typography>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      <Typography variant="subtitle2">
                        營業時間： {place.openingHour} 至 {place.closingHour}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '5px' }}>
                      <div
                        style={{
                          backgroundColor: '#F57C00',
                          margin: '3px',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '2px',
                        }}
                      >
                        <WifiRoundedIcon
                          fontSize="small"
                          style={{ color: 'white' }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: '#FFB74D',
                          margin: '3px',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '2px',
                        }}
                      >
                        <AddShoppingCartRoundedIcon
                          fontSize="small"
                          style={{ color: 'white' }}
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: '#FF9801',
                          margin: '3px',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '2px',
                        }}
                      >
                        <FastfoodRoundedIcon
                          fontSize="small"
                          style={{ color: 'white' }}
                        />
                      </div>
                    </div>
                    <Divider />
                  </div>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
};

export default MapInfoPanel;
