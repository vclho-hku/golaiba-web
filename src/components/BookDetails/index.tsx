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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '30px',
      paddingLeft: '30px',
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
      backgroundPosition: 'left',
    },
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    tag: {
      backgroundColor: '#E0DFE0',
      padding: '5px',
      borderRadius: '5px',
    },
    container: {
      marginTop: '10px',
    },
    button: {
      width: '200px',
      textAlign: 'center',
      borderColor: '#CAC194',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '5px',
      padding: '5px 5px 5px 5px',
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
    <Grid container className={classes.root}>
      <Grid
        container
        justify="flex-start"
        spacing={3}
        style={{ paddingBottom: 30 }}
        alignItems="center"
      >
        <Grid item>分類：</Grid>
        <Grid item>
          <div className={classes.tag}>企管財經</div>
        </Grid>
        <Grid item>
          <div className={classes.tag}>個人財務</div>
        </Grid>
        <Grid item>
          <div className={classes.tag}>一般</div>
        </Grid>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        direction="row"
      >
        <Grid item xs={12} sm={3}>
          <CardMedia
            className={classes.media}
            image={book.imageUrl.medium}
            title={book.title}
          />
          <p>
            分享至： <img src="/facebook.svg"></img>
            <img src="/twitter.svg"></img>
            <img src="/instagram.svg"></img>
          </p>
        </Grid>
        <Grid item xs={12} sm={'auto'} style={{ paddingLeft: '20px' }}>
          <Grid container justify="flex-start">
            <Grid container className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h5">
                  {book.title}
                </Typography>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={'auto'}>
                  <Grid className={classes.container}>作者:</Grid>
                  <Grid className={classes.container}>出版日期:</Grid>
                  <Grid className={classes.container}>出版社:</Grid>
                </Grid>
                <Grid item xs={'auto'}>
                  <Grid className={classes.container}>{author}</Grid>
                  <Grid className={classes.container}>2020年5月</Grid>
                  <Grid className={classes.container}>釆實文化</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} className={classes.container} spacing={3}>
            <Grid item xs={'auto'}>
              <div className={classes.button}>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item alignItems="baseline">
                    <Favorite style={{ color: red[500], fontSize: '15px' }} />
                  </Grid>
                  <Grid item>已儲存至願望清單</Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={'auto'}>
              <div className={classes.button}>
                <Grid container justify="center" alignItems="center">
                  <Grid item>已加到我的書櫃</Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <p>
            雖然投資理財越早起步越好， 但其實，投資永遠不嫌晚，
            投資晚鳥退休教師45歲才開始學存股， 50歲前就滾出千萬資產！
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookDetails;
