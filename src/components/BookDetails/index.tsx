import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_BOOK_DETAILS } from '../../query/book';
import authorToString from '../../util/authorToString';
import { Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { red, green, yellow } from '@material-ui/core/colors';
import BookDetailsContainer from './BookDetailsContainer';

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

const BookDetails: FunctionComponent<any> = (props: any) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: props.id },
  });
  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;

  const book = data.book;
  return <BookDetailsContainer book={book}></BookDetailsContainer>;
};

export default BookDetails;
