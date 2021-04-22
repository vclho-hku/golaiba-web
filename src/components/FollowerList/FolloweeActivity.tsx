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
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
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
  console.log(followeeActivityData);
  return (
    <div>
      書友近況：
      {followeeActivityData.getFolloweeActivity.map((activity: any) => {
        if (activity.activity == 'addToWishlist') {
          return <AddToWishlistItem activity={activity}></AddToWishlistItem>;
        }
      })}
    </div>
  );
};

export default FolloweeActivity;
