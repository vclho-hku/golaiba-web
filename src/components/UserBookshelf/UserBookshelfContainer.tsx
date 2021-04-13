import React from 'react';
import UserBook from './UserBook';

const UserBookshelfContainer = (props: any) => {
  const bookshelf = props.bookshelf;
  const handleDeleteUserBook = props.handleDeleteUserBook;
  const handleChangeReadingStatus = props.handleChangeReadingStatus;
  return (
    <div>
      {bookshelf.map((value: any, index: any) => {
        return (
          <UserBook
            key={index}
            userBookId={value.id}
            book={value.book}
            readingStatus={value.readingStatus}
            handleDeleteUserBook={handleDeleteUserBook}
            handleChangeReadingStatus={handleChangeReadingStatus}
          ></UserBook>
        );
      })}
    </div>
  );
};

export default UserBookshelfContainer;
