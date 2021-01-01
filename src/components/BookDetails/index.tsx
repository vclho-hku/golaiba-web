import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_BOOK_DETAILS } from '../../query/book';
import authorToString from '../../util/authorToString';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: '400px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
    },
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
  const author = authorToString(book.authors);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            className={classes.media}
            image={book.imageUrl.medium}
            title={book.title}
          />
          <p>評分： ⭐️⭐️⭐️⭐️⭐️</p>
        </Grid>
        <Grid item xs={12} sm={'auto'}>
          <p>書名: {book.title}</p>
          <p>作者: {author}</p>
          <p>ISBN: {book.isbn}</p>
          <p>簡介: {book.description}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
