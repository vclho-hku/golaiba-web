import React, { useState, useContext, useEffect } from 'react';
import BookDetailsInfo from './BookDetailsInfo';
import BookReviewContainer from './BookReviewContainer';

const BookDetailsContainer = (props: any) => {
  return (
    <div>
      <BookDetailsInfo
        book={props.book}
        isInWishlist={props.isInWishlist}
        isInBookshelf={props.isInBookshelf}
      ></BookDetailsInfo>
      <BookReviewContainer bookId={props.book.id}></BookReviewContainer>
    </div>
  );
};

export default BookDetailsContainer;
