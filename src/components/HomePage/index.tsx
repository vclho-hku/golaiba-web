import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import HeaderBanner from './HeaderBanner';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({}));

const HomePage = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      <HeaderBanner></HeaderBanner>
    </div>
  );
};

export default HomePage;
