import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import authorToString from '../../util/authorToString';
import { Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import BookDetailsContainerStyle from './BookDetailsContainerStyle';
import { AuthUserContext } from '../../Session';
import { ADD_WISH_LIST, REMOVE_WISH_LIST } from '../../query/wishlist';
import { useMutation } from '@apollo/client';
import { red, green, yellow } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import { useRouter } from 'next/router';
import { GET_WISH_LIST_ID } from '../../query/wishlist';
import { useLazyQuery } from '@apollo/client';
import { UserDataContext } from '../../Session';

const BookDetailsContainer = (props: any) => {
  const classes = props.classes;
  const { userData } = useContext(UserDataContext);
  const router = useRouter();
  const book = props.book;
  const [isInWishlist, setInWishlist] = useState(false);

  const [addWishList] = useMutation(ADD_WISH_LIST);
  const authUser: any = useContext(AuthUserContext);
  const [getWishlistId, { data: wishlistid }] = useLazyQuery(GET_WISH_LIST_ID, {
    fetchPolicy: 'network-only',
  });

  const author = authorToString(book.authors);
  const handleAddToWishlist = () => {
    if (authUser) {
      setInWishlist(true);
      addWishList({
        variables: {
          uid: authUser.uid,
          bookId: book.id,
        },
      });
    } else {
      router.push('login');
    }
  };

  const toggleWishlist = (wishlist: any, bookId: any) => {
    console.log('test');
    wishlist.forEach((element: any) => {
      console.log(element.id);
      console.log(book.id);
      if (element.id == bookId) {
        setInWishlist(true);
      }
    });
  };

  useEffect(() => {
    setInWishlist(props.isInUserWishList);
  }, [props.isInUserWishList]);

  useEffect(() => {
    if (userData) {
      getWishlistId({ variables: { id: userData.id } });
    } else {
      setUserWishlist([]);
    }
  }, [userData]);

  useEffect(() => {
    if (wishlistid) {
      toggleWishlist(wishlistid.getWishlist, book.id);
    }
  }, [wishlistid]);

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
              {isInWishlist ? (
                <Tooltip title="已加到想看清單" aria-label="已加到想看清單">
                  <Button variant="outlined" color="primary">
                    <Favorite style={{ color: red[500], fontSize: '15px' }} />
                    已加到想看清單
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title="已加到想看清單" aria-label="已加到想看清單">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleAddToWishlist}
                  >
                    <FavoriteBorder
                      style={{ color: red[500], fontSize: '15px' }}
                    />
                    加到想看清單
                  </Button>
                </Tooltip>
              )}
            </Grid>
            <Grid item xs={'auto'}>
              <Button variant="outlined" color="primary">
                <Favorite style={{ color: red[500], fontSize: '15px' }} />
                已加到我的書櫃
              </Button>
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

export default withStyles(BookDetailsContainerStyle)(BookDetailsContainer);