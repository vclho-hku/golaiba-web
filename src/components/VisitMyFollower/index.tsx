import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWER } from '../../query/followList';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red, blue } from '@material-ui/core/colors';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    root: {
      maxWidth: 345,
      margin: '15px',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardHeader: {
      cursor: 'pointer',
    },
  }),
);

const VisitMyFollower = (props: any) => {
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

  if (getFollower.getFollower.length == 0) {
    return <div>暫時沒有粉絲。</div>;
  } else {
    console.log(getFollower.getFollower);
    return (
      <div>
        <Typography variant="h5">粉絲</Typography>
        {getFollower.getFollower.map((follower: any, index: any) => {
          return (
            <Card key={index} className={classes.root}>
              <Link href={`/user/${follower.id}`}>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title={follower.name}
                  subheader={follower.email}
                />
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }
};

export default VisitMyFollower;