import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ThreadHeader from './ThreadHeader';
import ThreadList from './ThreadList';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const DiscussThreads = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <ThreadHeader></ThreadHeader>
      <ThreadList></ThreadList>
    </div>
  );
};

export default DiscussThreads;
