import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserItem from './UserItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_FOLLOWEE, REMOVE_FOLLOWEE } from '../../query/followList';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    userItemContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
);

const MyFolloweeList = (props: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(props.reload);
  const [followeeList, setFolloweeList] = useState([]);
  const [getFollowee, { data: getFolloweeList }] = useLazyQuery(GET_FOLLOWEE, {
    variables: { userId: props.userId },
    fetchPolicy: 'network-only',
  });

  const [removeFollowee] = useMutation(REMOVE_FOLLOWEE);

  const handleDeleteFollower = (followeeId: string) => {
    removeFollowee({
      variables: {
        userId: props.userId,
        followeeId: followeeId,
      },
    });
    setFolloweeList(followeeList.filter((user: any) => user.id !== followeeId));
  };

  useEffect(() => {
    if (props.userId) {
      getFollowee();
    }
  }, [props.userId]);

  useEffect(() => {
    getFollowee();
  }, [props.reload]);

  useEffect(() => {
    if (getFolloweeList) {
      setFolloweeList(getFolloweeList.getFollowee);
      setLoading(false);
    }
  }, [getFolloweeList]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      {followeeList.length == 0 ? (
        <div>暫時還沒有書友。</div>
      ) : (
        <div>
          <Typography variant="h5">我的書友</Typography>
          <div className={classes.userItemContainer}>
            {followeeList.map((followee: any, index: any) => {
              return (
                <UserItem
                  key={index}
                  user={followee}
                  canRemove={true}
                  handleDeleteFollower={handleDeleteFollower}
                ></UserItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFolloweeList;
