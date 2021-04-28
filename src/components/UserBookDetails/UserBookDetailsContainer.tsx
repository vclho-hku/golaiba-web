import React from 'react';
import UserBookDetails from './UserBookDetails';
import UserBookReview from './UserBookReview';

const UserBookDetailsContainer = (props: any) => {
  return (
    <div style={{ padding: '20px' }}>
      <UserBookDetails userBook={props.userBook}></UserBookDetails>
      <UserBookReview bookId={props.userBook.book.id}></UserBookReview>
    </div>
  );
};

export default UserBookDetailsContainer;
