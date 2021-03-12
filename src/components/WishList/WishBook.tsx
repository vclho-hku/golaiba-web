import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import authorToString from '../../util/authorToString';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '30px',
      paddingLeft: '30px',
    },
    media: {
      height: '400px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
      backgroundPosition: 'left',
    },
  }),
);

const WishBook = (props: any) => {
  const classes = useStyles();
  const book = props.data;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          className={classes.media}
          image={book.imageUrl.medium}
          title={book.title}
        />
      </Grid>
      <Grid item xs={12} sm={'auto'} style={{ paddingLeft: '20px' }}>
        <Grid container spacing={3}>
          {book.title}
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={'auto'}>
            <Grid>作者:</Grid>
            <Grid>出版日期:</Grid>
            <Grid>出版社:</Grid>
          </Grid>
          <Grid item xs={'auto'}>
            <Grid>{authorToString(book.authors)}</Grid>
            <Grid>{book.publishDate}</Grid>
            <Grid>{book.publisher.name.zh_hk}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WishBook;
