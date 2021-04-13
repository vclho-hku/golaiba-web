import React, { useState, useRef, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useMutation } from '@apollo/client';
import { ADD_USER_BOOK_REVIEW } from '../../query/userBookshelf';

const UserBookReviewForm = (props: any) => {
  const [rating, setRating] = useState(null);
  const [addUserBookReview] = useMutation(ADD_USER_BOOK_REVIEW);
  const reviewInput = useRef(null);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const review = reviewInput.current.value;
    addUserBookReview({
      variables: {
        userId: props.userId,
        bookId: props.bookId,
        userName: props.userName,
        rating: rating,
        review: review,
      },
    });
  };

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <Typography component="legend">評價</Typography>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <Rating
            name="customized-empty"
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            onChange={(event, newValue: any) => {
              setRating(newValue);
            }}
          />
        </Box>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <TextareaAutosize
            ref={reviewInput}
            aria-label="review"
            rowsMin={5}
            placeholder="書評"
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          完成
        </Button>
      </form>
    </div>
  );
};

export default UserBookReviewForm;
