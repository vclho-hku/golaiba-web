import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

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
  }),
);

const BookDetails: FunctionComponent<any> = (props: any) => {
  const classes = useStyles();
  const data = {
    imageUrl:
      'https://books.google.com/books/content/images/frontcover/HIPFCwAAQBAJ?fife=w400-h600',
    title: 'afffae',
    author: 'abafew',
    isbn: '123',
    description: 'Test123123213',
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            className={classes.media}
            image={data.imageUrl}
            title={data.title}
          />
          <p>評分： ⭐️⭐️⭐️⭐️⭐️</p>
        </Grid>
        <Grid item xs={12} sm={'auto'}>
          <p>書名: {data.title}</p>
          <p>作者: {data.author}</p>
          <p>ISBN: {data.isbn}</p>
          <p>簡介: {data.description}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
