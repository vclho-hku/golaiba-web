import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import BookSearchContainer from './BookSearchContainer';
import { GET_BOOK_BY_SEARCH } from '../../query/book';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

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

const BookSearch = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: searchResult } = useQuery(GET_BOOK_BY_SEARCH, {
    variables: { keywords: props.keywords, limit: 20, offset: 0 },
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
    <div>
      <Typography variant="h5">書本搜尋結果</Typography>
      <BookSearchContainer
        books={searchResult.getBookBySearch}
      ></BookSearchContainer>
    </div>
  );
};

export default BookSearch;
