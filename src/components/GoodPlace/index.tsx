import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MapContent from './MapContent';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
  }),
);

const GoodPlace = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.banner}>
        <Hidden xsDown>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="../Place_Hero_Dsk.jpg"
          ></img>
        </Hidden>
        <Hidden smUp>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="../Place_Hero_Mob.jpg"
          ></img>
        </Hidden>
      </div>
      <div>
        <MapContent></MapContent>
      </div>
    </div>
  );
};

export default GoodPlace;
