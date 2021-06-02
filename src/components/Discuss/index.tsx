import React from 'react';
import Header from './Header';
import TopicList from './TopicList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import testingData from './testingData';
const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Discuss = (props: any) => {
  const classes = useStyles();
  const data = testingData;
  return (
    <div>
      <Header></Header>
      <TopicList data={data}></TopicList>
    </div>
  );
};

export default Discuss;
