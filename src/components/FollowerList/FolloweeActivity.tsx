import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserItem from './UserItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWEE_ACTIVITY } from '../../query/followList';
import AddToWishlistItem from './FollowActivityItems/AddToWishlistItem';
import AddToBookshelf from './FollowActivityItems/AddToBookshelf';
import WrittenBookReview from './FollowActivityItems/WrittenBookReview';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import {
  ADD_TO_WISHLIST,
  ADD_TO_BOOKSHELF,
  WRITTEN_BOOK_REVIEW,
  ADD_FOLLOWER,
} from '../../constant/UserActivityList';
import AddFollower from './FollowActivityItems/AddFollower';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const FolloweeActivity = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: followeeActivityData } = useQuery(
    GET_FOLLOWEE_ACTIVITY,
    {
      variables: { userId: props.userId },
      fetchPolicy: 'network-only',
    },
  );

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  if (followeeActivityData.getFolloweeActivity.length == 0) {
    return (
      <div>
        <Typography variant="h5">沒有書友近況</Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h5">書友近況</Typography>
      {followeeActivityData.getFolloweeActivity.map((activity: any) => {
        if (activity.activity == ADD_TO_WISHLIST) {
          return <AddToWishlistItem activity={activity}></AddToWishlistItem>;
        }
        if (activity.activity == ADD_TO_BOOKSHELF) {
          return <AddToBookshelf activity={activity}></AddToBookshelf>;
        }
        if (activity.activity == WRITTEN_BOOK_REVIEW) {
          return <WrittenBookReview activity={activity}></WrittenBookReview>;
        }
        if (activity.activity == ADD_FOLLOWER) {
          return <AddFollower activity={activity}></AddFollower>;
        }
      })}
    </div>
  );
};

export default FolloweeActivity;
