import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const SectionBar = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      <Toolbar>
        <Typography variant="h6">{props.title}</Typography>
      </Toolbar>
    </div>
  );
};

export default SectionBar;
