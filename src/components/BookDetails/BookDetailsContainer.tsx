import React, { useState, useContext, useEffect } from 'react';
import BookDetailsInfo from './BookDetailsInfo';
import BookReviewContainer from './BookReviewContainer';
import BookRecommandationContainer from './BookRecommandationContainer';
import Divider from '@material-ui/core/Divider';

const BookDetailsContainer = (props: any) => {
  return (
    <div style={{ padding: '30px' }}>
      <BookDetailsInfo
        book={props.book}
        isInWishlist={props.isInWishlist}
        isInBookshelf={props.isInBookshelf}
      ></BookDetailsInfo>
      <Divider light style={{ margin: '10px' }}></Divider>
      <BookReviewContainer book={props.book}></BookReviewContainer>
      <BookRecommandationContainer></BookRecommandationContainer>
    </div>
  );
};

export default BookDetailsContainer;
