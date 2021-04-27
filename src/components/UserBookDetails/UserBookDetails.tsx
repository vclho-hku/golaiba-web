import React from 'react';
import Grid from '@material-ui/core/Grid';
import authorToString from '../../util/authorToString';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      padding: '10px',
    },
    itemLeft: {
      padding: '10px 20px 10px 10px',
    },
    itemRight: {
      flexGrow: 1,
      flexShrink: 0,
    },
    image: {
      width: '200px',
    },
  }),
);

const UserBookDetails = (props: any) => {
  const classes = useStyles();
  const book = props.userBook.book;
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.itemLeft}>
        <img src={book.imageUrl.medium} className={classes.image}></img>
      </div>
      <div className={classes.itemRight}>
        <div style={{ width: 'auto', minWidth: '400px' }}>
          <Typography variant="h5">{book.title}</Typography>
          <Grid container spacing={5}>
            <Grid item xs={'auto'} spacing={5}>
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
        </div>
      </div>
    </div>
  );
};

export default UserBookDetails;
