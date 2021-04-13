import React, { useEffect, useContext, useState } from 'react';
import UserBookReviewForm from './UserBookReviewForm';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BOOK_REVIEW } from '../../query/userBookshelf';
import { UserDataContext } from '../../Session';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';

const UserBookReview = (props: any) => {
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
  const { userData } = useContext(UserDataContext);
  const [userReview, setUserReview] = useState('loading');
  const classes = useStyles();
  const [getUserBookReview, { data: userBookReviewData }] = useLazyQuery(
    GET_USER_BOOK_REVIEW,
    {
      fetchPolicy: 'network-only',
    },
  );

  const updateData = () => {
    if (userData) {
      getUserBookReview({
        variables: { userId: userData.id, bookId: props.bookId },
      });
    }
  };

  useEffect(() => {
    if (userData) {
      getUserBookReview({
        variables: { userId: userData.id, bookId: props.bookId },
      });
    }
  }, [userData]);

  useEffect(() => {
    if (userBookReviewData) {
      setUserReview(userBookReviewData.getUserBookReview);
    }
  }, [userBookReviewData]);

  if (userReview == 'loading') {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
  if (userReview == null) {
    return (
      <UserBookReviewForm
        bookId={props.bookId}
        userId={userData.id}
        userName={userData.name}
        updateData={updateData}
      ></UserBookReviewForm>
    );
  }
  return (
    <div>
      你已寫了書評：
      <div>
        <Rating name="read-only" value={userReview.rating} readOnly />
      </div>
      <div>{userReview.review}</div>
    </div>
  );
};

export default UserBookReview;
