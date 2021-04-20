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
import { GET_FOLLOWER } from '../../query/followList';
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

const MyFollower = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: getFollower } = useQuery(GET_FOLLOWER, {
    variables: { userId: props.userId },
    fetchPolicy: 'network-only',
  });

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  return (
    <div>
      我的粉絲：
      {getFollower.getFollower.map((follower: any) => {
        return <UserItem key={follower.id} user={follower}></UserItem>;
      })}
    </div>
  );
};

export default MyFollower;
