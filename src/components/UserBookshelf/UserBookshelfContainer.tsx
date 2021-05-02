import React, { useState } from 'react';
import UserBook from './UserBook';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserBookEditDialog from './UserBookEditDialog';
import { NoBook } from '../Share';
import Typography from '@material-ui/core/Typography';
import { SignalCellularNoSimOutlined } from '@material-ui/icons';

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
  const [bookshelf, setBookshelf] = useState(props.bookshelf);
  const handleChangeReadingStatus = props.handleChangeReadingStatus;
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogBookInfo, setDialogBookInfo] = useState(null);

  const handleOpenEditDialog = (book: any) => {
    setDialogBookInfo(book);
    setOpenDialog(true);
  };
  const handleDialogOnClose = () => {
    setOpenDialog(false);
    setDialogBookInfo(null);
  };

  const handleDeleteUserBook = (bookId: string) => {
    setBookshelf(
      bookshelf.filter((userBook: any) => userBook.book.id !== bookId),
    );
    props.handleDeleteUserBook(bookId);
  };
  return (
    <div>
      {bookshelf.length == 0 && (
        <NoBook>
          <Typography variant="body1">你還未加入任何書本至書櫃</Typography>
        </NoBook>
      )}
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
              handleOpenEditDialog={handleOpenEditDialog}
            ></UserBook>
          );
        })}
      </div>
      <UserBookEditDialog
        book={dialogBookInfo}
        open={openDialog}
        onClose={handleDialogOnClose}
      ></UserBookEditDialog>
    </div>
  );
};

export default UserBookshelfContainer;
