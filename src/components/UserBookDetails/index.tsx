import React from 'react';
import { useQuery } from '@apollo/client';
import UserBookDetailsContainer from './UserBookDetailsContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BOOK_DETAILS } from '../../query/userBookshelf';

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

const UserBookDetails = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: userBook } = useQuery(GET_USER_BOOK_DETAILS, {
    variables: { userBookId: props.userBookId },
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
    <UserBookDetailsContainer
      userBook={userBook.getUserBookDetails}
    ></UserBookDetailsContainer>
  );
};

export default UserBookDetails;
