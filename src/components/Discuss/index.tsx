import React from 'react';
import Header from './Header';
import TopicList from './TopicList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Discuss = (props: any) => {
  const classes = useStyles();
  const data = [
    {
      topic: 'test',
      creator: 'abc',
      lastUpdate: '2021/05/30 13:45',
      pageCount: 10,
      totalComment: 150,
      likeCount: 20,
    },
    {
      topic: 'test',
      creator: 'abc',
      lastUpdate: '2021/05/30 13:45',
      pageCount: 10,
      totalComment: 150,
      likeCount: 20,
    },
    {
      topic: 'test 12321 124321312 3412424',
      creator: 'abc',
      lastUpdate: '2021/05/30 13:45',
      pageCount: 10,
      totalComment: 150,
      likeCount: 20,
    },
    {
      topic: 'test',
      creator: 'abc',
      lastUpdate: '2021/05/30 13:45',
      pageCount: 10,
      totalComment: 150,
      likeCount: 20,
    },
  ];
  return (
    <div>
      <Header></Header>
      <TopicList data={data}></TopicList>
    </div>
  );
};

export default Discuss;
