import React, { useState, useContext, useEffect } from 'react';
import BookReviewList from './BookReviewList';
import { Typography } from '@material-ui/core';

const BookReviewContainer = (props: any) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        書本評價
      </Typography>
      <BookReviewList
        bookId={props.bookId}
        limit={10}
        offset={0}
      ></BookReviewList>
    </div>
  );
};

export default BookReviewContainer;
