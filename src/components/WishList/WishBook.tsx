import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import authorToString from '../../util/authorToString';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Clear } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import { REMOVE_WISH_LIST } from '../../query/wishlist';
import { useMutation, useLazyQuery } from '@apollo/client';
import { GET_USER_BOOK } from '../../query/userBookshelf';
import { ADD_TO_BOOKSHELF } from '../../query/userBookshelf';
import { UserDataContext } from '../../Session';

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

const WishBook = (props: any) => {
  const classes = useStyles();
  const [isInBookshelf, setInBookshelf] = useState(props.isInBookshelf);
  const [removeWishlist, setRemoveWishlist] = useState('block');
  const [removeWishList] = useMutation(REMOVE_WISH_LIST);
  const [addToBookshelf] = useMutation(ADD_TO_BOOKSHELF);
  const { userData } = useContext(UserDataContext);
  const book = props.data;
  const handleAddToBookshelf = () => {
    if (userData) {
      setInBookshelf(true);
      addToBookshelf({
        variables: {
          userId: userData.id,
          bookId: book.id,
        },
      });
    }
  };
  const handleRemoveFromWishlist = () => {
    removeWishList({
      variables: {
        uid: props.userUId,
        bookId: book.id,
      },
    });
    setRemoveWishlist('none');
  };
  const [getUserBook, { data: userBook }] = useLazyQuery(GET_USER_BOOK, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (userData) {
      getUserBook({ variables: { userId: userData.id, bookId: book.id } });
    }
  }, [userData]);

  useEffect(() => {
    if (userBook && userBook.getUserBook) {
      setInBookshelf(true);
    }
  }, [userBook]);

  return (
    <Paper style={{ display: removeWishlist }}>
      <div className={classes.container}>
        <div className={classes.itemLeft}>
          <img src={book.imageUrl.medium} className={classes.image}></img>
        </div>
        <div className={classes.itemRight}>
          <div style={{ width: 'auto', minWidth: '400px' }}>
            <Typography variant="h5">{book.title}</Typography>
            <div
              style={{
                display: 'flex',
                padding: '5px',
                alignContent: 'center',
              }}
            >
              <Rating
                name="read-only"
                value={book.rating}
                precision={0.5}
                readOnly
              />
              <Typography variant="body1">({book.ratingCount})</Typography>
            </div>
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

            <Grid container xs={12} className={classes.container} spacing={3}>
              <Grid item xs={'auto'}>
                {isInBookshelf ? (
                  <Tooltip title="已加到我的書櫃" aria-label="已加到我的書櫃">
                    <Button variant="outlined" color="primary" disabled>
                      <CollectionsBookmarkIcon style={{ fontSize: '15px' }} />
                      已加到我的書櫃
                    </Button>
                  </Tooltip>
                ) : (
                  <Tooltip title="加到我的書櫃" aria-label="加到我的書櫃">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleAddToBookshelf}
                    >
                      <CollectionsBookmarkOutlinedIcon
                        style={{ color: red[500], fontSize: '15px' }}
                      />
                      加到「我的書櫃」
                    </Button>
                  </Tooltip>
                )}
              </Grid>
              <Grid item xs={'auto'}>
                <Tooltip title="加到想看清單" aria-label="加到想看清單">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleRemoveFromWishlist}
                  >
                    <Clear style={{ color: red[500], fontSize: '20px' }} />
                    在「想看清單」移除
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default WishBook;

{
  /* <Grid container className={classes.root}>
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
</Grid> */
}
