import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import { GET_BOOK_REVIEW } from '../../query/book';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BookReviewList = (props: any) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      loading: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
      container: {
        display: 'flex',
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
      {bookReview.getBookReview.length == 0 && (
        <Typography variant="body1">暫時沒有其他人的書評</Typography>
      )}
      {bookReview.getBookReview.map((value: any, index: any) => {
        return (
          <div key={index}>
            <div className={classes.container}>
              <div style={{ marginRight: '20px' }}>
                <Avatar alt="Remy Sharp" src={value.userAvatarImgUrl} />
              </div>
              <div>
                <div>
                  <div className={classes.container}>
                    <div style={{ marginRight: '20px' }}>{value.userName}</div>
                    <div>{value.updatedAt}</div>
                  </div>
                  <div>
                    <Rating
                      size="small"
                      name="read-only"
                      value={value.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                {value.review && (
                  <div style={{ marginTop: '25px' }}>{value.review}</div>
                )}
              </div>
            </div>
            <Divider light style={{ margin: '10px' }} />
          </div>
        );
      })}
    </div>
  );
};

export default BookReviewList;
