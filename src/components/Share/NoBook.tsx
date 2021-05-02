import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

const NoBook = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <AnnouncementOutlinedIcon fontSize="large" />
      </div>
      <div className={classes.container}>{props.children}</div>
    </div>
  );
};

export default NoBook;
