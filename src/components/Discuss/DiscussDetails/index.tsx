import React from 'react';
import Header from './Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import DiscussThreads from './DiscussThreads';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const DiscussDetails = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <Header topic={'test'}></Header>
      <Divider />
      <DiscussThreads></DiscussThreads>
    </div>
  );
};

export default DiscussDetails;
