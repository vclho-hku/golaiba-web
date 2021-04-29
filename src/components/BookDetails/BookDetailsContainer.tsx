import React, { useState, useContext, useEffect } from 'react';
import BookDetailsInfo from './BookDetailsInfo';
import BookReviewContainer from './BookReviewContainer';
import Divider from '@material-ui/core/Divider';

const BookDetailsContainer = (props: any) => {
  return (
    <div>
      <BookDetailsInfo
        book={props.book}
        isInWishlist={props.isInWishlist}
        isInBookshelf={props.isInBookshelf}
      ></BookDetailsInfo>
      <Divider light style={{ margin: '10px' }}></Divider>
      <BookReviewContainer book={props.book}></BookReviewContainer>
    </div>
  );
};

export default BookDetailsContainer;
