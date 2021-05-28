import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookItem from './BookItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const AddFollower = (props: any) => {
  const activityData = props.activity;
  const user = activityData.user;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={user.name}
      />
      <CardContent>加入了書友 {activityData.data.followee.name} </CardContent>
      <CardContent>時間：{activityData.updatedAt}</CardContent>
    </Card>
  );
};

export default AddFollower;
