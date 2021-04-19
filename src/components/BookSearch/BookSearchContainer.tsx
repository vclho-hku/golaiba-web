import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BookSearchInfo from './BookSearchInfo';
const BookSearchContainer = (props: any) => {
  const books = props.books;

  if (books.length == 0) {
    return <div>對不起，找不到相關書本。</div>;
  }
  return (
    <div>
      {books.map((book: any, index: any) => {
        return <BookSearchInfo key={book._id} book={book}></BookSearchInfo>;
      })}
    </div>
  );
};

export default BookSearchContainer;
