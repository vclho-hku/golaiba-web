import React, { useState, useContext, useEffect } from 'react';
import BookReviewList from './BookReviewList';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { useLazyQuery } from '@apollo/client';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCommentIcon from '@material-ui/icons/AddComment';
import UserBookReviewForm from '../UserBookDetails/UserBookReviewForm';
import { GET_USER_BOOK_REVIEW } from '../../query/userBookshelf';
import { UserDataContext } from '../../Session';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      justifyContent: 'space-between',
    },
  }),
);

const BookReviewContainer = (props: any) => {
  const classes = useStyles();
  const book = props.book;
  const { userData } = useContext(UserDataContext);
  const [userReview, setUserReview] = useState({
    isLoading: true,
    rating: null,
    review: null,
  });
  const [getUserBookReview, { data: userBookReviewData }] = useLazyQuery(
    GET_USER_BOOK_REVIEW,
    {
      fetchPolicy: 'network-only',
    },
  );
  const updateData = () => {
    if (userData) {
      getUserBookReview({
        variables: { userId: userData.id, bookId: props.book.id },
      });
    }
  };

  useEffect(() => {
    if (userData) {
      getUserBookReview({
        variables: { userId: userData.id, bookId: props.book.id },
      });
    }
  }, [userData]);

  useEffect(() => {
    if (userBookReviewData) {
      setUserReview({ ...userBookReviewData.getUserBookReview });
      setShowReviewFrom('none');
    }
  }, [userBookReviewData]);

  const [showReviewForm, setShowReviewFrom] = useState<any>('none');
  const handleWriteReview = () => {
    setShowReviewFrom('block');
  };
  return (
    <div style={{ paddingLeft: '30px' }}>
      <div className={classes.container}>
        <div>
          <div>
            <Typography variant="h6" gutterBottom>
              書評
            </Typography>
          </div>
          <div>
            <Typography variant="body2" gutterBottom>
              {userReview.rating == null && userReview.review == null
                ? '分享你對本書的想法'
                : '你已寫了書評'}
            </Typography>
          </div>
        </div>
        <div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              {book.rating}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <Rating
                size="small"
                name="read-only"
                value={book.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div>
              <Typography variant="body2" gutterBottom>
                ({book.ratingCount})
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div>
        {userReview.rating == null && userReview.review == null ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCommentIcon />}
            onClick={handleWriteReview}
          >
            撰寫書評
          </Button>
        ) : (
          <div>
            <div>
              <Rating
                name="read-only"
                value={userReview.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div>{userReview.review}</div>
          </div>
        )}
      </div>
      {userData && (
        <div style={{ display: showReviewForm }}>
          <UserBookReviewForm
            bookId={book.id}
            userId={userData.id}
            userName={userData.name}
            updateData={updateData}
          ></UserBookReviewForm>
        </div>
      )}

      <Divider light style={{ margin: '10px' }} />
      <BookReviewList bookId={book.id} limit={10} offset={0}></BookReviewList>
    </div>
  );
};

export default BookReviewContainer;
