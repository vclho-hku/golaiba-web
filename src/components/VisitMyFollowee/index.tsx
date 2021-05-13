import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWEE } from '../../query/followList';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
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

const VisitMyFollowee = (props: any) => {
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

  if (getFollowee.getFollowee.length == 0) {
    return <div>暫時還沒有書友。</div>;
  } else {
    return (
      <div>
        <Typography variant="h5">書友</Typography>
        {getFollowee.getFollowee.map((followee: any, index: any) => {
          return (
            <Card key={index} className={classes.root}>
              <Link href={`/user/${followee.id}`}>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title={followee.name}
                  subheader={followee.email}
                />
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }
};

export default VisitMyFollowee;
