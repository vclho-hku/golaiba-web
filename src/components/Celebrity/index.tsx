import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CelebrityList from './celebrityList';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
  }),
);

const Celebrity = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.banner}>
        <Hidden smDown>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="./CB_Hero_Dsk.jpg"
          ></img>
        </Hidden>
        <Hidden mdUp>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="./CB_Hero_Mob.jpg"
          ></img>
        </Hidden>
      </div>
      <CelebrityList></CelebrityList>
    </div>
  );
};

export default Celebrity;
