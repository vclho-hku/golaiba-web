import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ThreadItem from './ThreadItem';
import testingData from './testingData';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: '15px',
    },
  }),
);

const ThreadList = (props: any) => {
  const classes = useStyles();
  const data = testingData;
  return (
    <div className={classes.container}>
      {data.map((thread: any, index: any) => {
        return <ThreadItem key={index} data={thread}></ThreadItem>;
      })}
    </div>
  );
};

export default ThreadList;
