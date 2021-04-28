import React from 'react';
import UserBook from './UserBook';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      padding: '10px',
    },
  }),
);

const UserBookshelfContainer = (props: any) => {
  const classes = useStyles();
  const bookshelf = props.bookshelf;
  const handleDeleteUserBook = props.handleDeleteUserBook;
  const handleChangeReadingStatus = props.handleChangeReadingStatus;
  return (
    <div>
      <div className={classes.container}>
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
    </div>
  );
};

export default UserBookshelfContainer;
