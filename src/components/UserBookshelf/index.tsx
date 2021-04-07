import React from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { REMOVE_FROM_BOOKSHELF } from '../../query/userBookshelf';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BOOKSHELF } from '../../query/userBookshelf';
import UserBookshelfContainer from './UserBookshelfContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const UserBookshelf = (props: any) => {
  const classes = useStyles();
  const [removeFromBookshelf] = useMutation(REMOVE_FROM_BOOKSHELF);
  const handleDeleteUserBook = (bookId: any) => {
    removeFromBookshelf({
      variables: {
        userId: props.userId,
        bookId: bookId,
      },
    });
  };

  const { loading, error, data: bookshelf } = useQuery(GET_USER_BOOKSHELF, {
    variables: { userId: props.userId },
    fetchPolicy: 'network-only',
  });
  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  return (
    <UserBookshelfContainer
      bookshelf={bookshelf.getUserBookshelf}
      handleDeleteUserBook={handleDeleteUserBook}
    ></UserBookshelfContainer>
  );
};

export default UserBookshelf;
