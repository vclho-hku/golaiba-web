import React from 'react';
import UserBook from './UserBook';

const UserBookshelfContainer = (props: any) => {
  const bookshelf = props.bookshelf;
  const handleDeleteUserBook = props.handleDeleteUserBook;

  return (
    <div>
      {bookshelf.map((value: any, index: any) => {
        return (
          <UserBook
            key={index}
            book={value.book}
            handleDeleteUserBook={handleDeleteUserBook}
          ></UserBook>
        );
      })}
    </div>
  );
};

export default UserBookshelfContainer;
