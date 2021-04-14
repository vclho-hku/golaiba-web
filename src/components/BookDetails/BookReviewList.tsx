import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import { GET_BOOK_REVIEW } from '../../query/book';
import Divider from '@material-ui/core/Divider';
const BookReviewList = (props: any) => {
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
  const classes = useStyles();
  const { loading, error, data: bookReview } = useQuery(GET_BOOK_REVIEW, {
    variables: {
      bookId: props.bookId,
      limit: props.limit,
      offset: props.offset,
    },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
  if (error) return <p>系統出現問題 :(</p>;
  return (
    <div>
      {bookReview.getBookReview.map((value: any, index: any) => {
        return (
          <div key={index}>
            <Divider light />
            <div>用戶：{value.userName}</div>
            <div>
              <Rating
                name="read-only"
                value={value.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div>評價：{value.review}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BookReviewList;
