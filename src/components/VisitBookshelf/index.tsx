import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BOOKSHELF } from '../../query/userBookshelf';
import VisitBookshelfContainer from './VisitBookshelfContainer';

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

const VisitBookshelf = (props: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [bookshelf, setBookshelf] = useState(null);
  const [getUserBookshelf, { data: bookshelfData }] = useLazyQuery(
    GET_USER_BOOKSHELF,
    {
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (props.userId) {
      getUserBookshelf({ variables: { userId: props.userId } });
    }
  }, [props.userId]);

  useEffect(() => {
    if (bookshelfData) {
      setBookshelf(bookshelfData.getUserBookshelf);
      setLoading(false);
    }
  }, [bookshelfData]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <VisitBookshelfContainer bookshelf={bookshelf} />
    </div>
  );
};

export default VisitBookshelf;
