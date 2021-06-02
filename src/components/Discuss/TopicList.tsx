import React from 'react';
import Header from './Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      // borderStyle: 'solid',
      // borderColor: '#ff0000',
    },
  }),
);

const TopicList = (props: any) => {
  const classes = useStyles();
  const data = props.data;
  return (
    <List>
      <Divider />
      {data.map((value: any, index: any) => {
        return (
          <>
            <ListItem
              key={index}
              className={classes.listItem}
              alignItems="flex-start"
            >
              {value.topic}
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
};

export default TopicList;
