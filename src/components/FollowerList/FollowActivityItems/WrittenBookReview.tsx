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
import BookItem from './BookItem';
import Rating from '@material-ui/lab/Rating';

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

const WrittenBookReview = (props: any) => {
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
      <CardContent>寫了書評 </CardContent>
      <CardContent>
        <div>
          <Rating
            name="read-only"
            value={activityData.data.bookRating}
            precision={0.5}
            readOnly
          />
        </div>
        <div>{activityData.data.bookReview}</div>
      </CardContent>
      <CardContent>
        <BookItem book={activityData.data.book} />
      </CardContent>
      <CardContent>時間：{activityData.updatedAt}</CardContent>
    </Card>
  );
};

export default WrittenBookReview;
