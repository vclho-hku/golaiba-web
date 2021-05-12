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
import { GET_FOLLOWEE } from '../../query/followList';
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

const MyFollowee = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: getFollowee } = useQuery(GET_FOLLOWEE, {
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
      我的書友：
      {getFollowee.getFollowee.map((followee: any, index: any) => {
        console.log(followee);
        return <UserItem key={index} user={followee}></UserItem>;
      })}
    </div>
  );
};

export default MyFollowee;
