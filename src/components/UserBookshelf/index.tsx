import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation, useLazyQuery } from '@apollo/client';
import { REMOVE_FROM_BOOKSHELF } from '../../query/userBookshelf';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BOOKSHELF } from '../../query/userBookshelf';
import {
  UPDATE_USER_BOOK_READING_STATUS,
  GET_USER_TAGS,
} from '../../query/userBookshelf';
import UserBookshelfContainer from './UserBookshelfContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SectionBar from '../SectionBar';
import UserBanner from '../UserBanner';
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

const UserBookshelf = (props: any) => {
  const classes = useStyles();
  const [bookshelf, setBookshelf] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removeFromBookshelf] = useMutation(REMOVE_FROM_BOOKSHELF);
  const [updateUserBookReadingStatus] = useMutation(
    UPDATE_USER_BOOK_READING_STATUS,
  );
  const handleDeleteUserBook = (bookId: any) => {
    removeFromBookshelf({
      variables: {
        userId: props.userId,
        bookId: bookId,
      },
    });
  };

  const handleChangeReadingStatus = (bookId: any, readingStatus: any) => {
    updateUserBookReadingStatus({
      variables: {
        userId: props.userId,
        bookId: bookId,
        readingStatus: readingStatus,
      },
    });
  };

  const [getUserBookshelf, { data }] = useLazyQuery(GET_USER_BOOKSHELF, {
    fetchPolicy: 'network-only',
  });

  const [getUserTags, { data: userTagsList }] = useLazyQuery(GET_USER_TAGS, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (props.userId) {
      getUserBookshelf({ variables: { userId: props.userId } });
      getUserTags({ variables: { userId: props.userId } });
    }
  }, [props.userId, getUserBookshelf, getUserTags]);

  useEffect(() => {
    if (data) {
      setBookshelf(data.getUserBookshelf);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (userTagsList) {
      setUserTags(userTagsList.getUserTags);
    }
  }, [userTagsList]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <UserBanner userId={props.userId}></UserBanner>
      <SectionBar title="我的書櫃"></SectionBar>
      <UserBookshelfContainer
        userTags={userTags}
        bookshelf={bookshelf}
        userId={props.userId}
        handleDeleteUserBook={handleDeleteUserBook}
        handleChangeReadingStatus={handleChangeReadingStatus}
      ></UserBookshelfContainer>
    </>
  );
};

export default UserBookshelf;
