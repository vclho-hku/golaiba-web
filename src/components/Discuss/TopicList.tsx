import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TopicItem from './TopicItem';
const useStyles = makeStyles((theme: Theme) => createStyles({}));

const TopicList = (props: any) => {
  const classes = useStyles();
  const data = props.data;
  return (
    <List>
      <Divider />
      {data.map((value: any, index: any) => {
        return (
          <>
            <TopicItem data={value}></TopicItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
};

export default TopicList;
