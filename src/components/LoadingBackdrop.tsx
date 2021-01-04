import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

interface LoadingBackdropProps {
  open: boolean;
}

const LoadingBackdrop = (props: LoadingBackdropProps) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
