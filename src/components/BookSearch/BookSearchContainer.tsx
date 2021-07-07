import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BookSearchInfo from './BookSearchInfo';
import BookSearchToolBar from './BookSearchToolBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    outerContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const BookSearchContainer = (props: any) => {
  const books = props.books;
  const classes = useStyles();
  if (books.length == 0) {
    return <div>對不起，找不到相關書本。</div>;
  }
  return (
    <div className={classes.outerContainer}>
      <BookSearchToolBar />
      {books.map((book: any, index: any) => {
        return <BookSearchInfo key={book._id} book={book}></BookSearchInfo>;
      })}
    </div>
  );
};

export default BookSearchContainer;
