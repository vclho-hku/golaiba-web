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
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    itemLeft: {
      padding: '10px 20px 10px 10px',
    },
    itemRight: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    image: {
      width: '200px',
    },
    bottomContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    bottom: {
      paddingTop: '10px',
    },
    bookDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
    bookDetailsItem: {
      display: 'flex',
      marginTop: '3px',
      marginBottom: '3px',
    },
    bookDetailsItemData: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
    },
  }),
);

const WishBook = (props: any) => {
  const classes = useStyles();
  const [isInBookshelf, setInBookshelf] = useState(props.isInBookshelf);
  // const [removeWishlist, setRemoveWishlist] = useState('block');
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
    props.removeBook(book.id);
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
    <Paper>
      <div className={classes.container}>
        <div className={classes.itemLeft}>
          <img src={book.imageUrl.medium} className={classes.image}></img>
        </div>
        <div className={classes.itemRight}>
          <div style={{ width: '100%', maxWidth: '350px' }}>
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
            <div className={classes.bookDetails}>
              <div className={classes.bookDetailsItem}>
                <div style={{ width: '100px' }}>作者:</div>
                <div className={classes.bookDetailsItemData}>
                  {authorToString(book.authors)}
                </div>
              </div>
              <div className={classes.bookDetailsItem}>
                <div style={{ width: '100px' }}>出版日期:</div>
                <div className={classes.bookDetailsItemData}>
                  {book.publishDate}
                </div>
              </div>
              <div className={classes.bookDetailsItem}>
                <div style={{ width: '100px' }}>出版社:</div>
                <div className={classes.bookDetailsItemData}>
                  {book.publisher.name.zh_hk}
                </div>
              </div>
            </div>

            <div className={classes.bottomContainer}>
              <div className={classes.bottom}>
                {isInBookshelf ? (
                  <Tooltip title="已加到我的書櫃" aria-label="已加到我的書櫃">
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      disabled
                    >
                      <CollectionsBookmarkIcon style={{ fontSize: '15px' }} />
                      已加到我的書櫃
                    </Button>
                  </Tooltip>
                ) : (
                  <Tooltip title="加到我的書櫃" aria-label="加到我的書櫃">
                    <Button
                      fullWidth
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
              </div>
              <div className={classes.bottom}>
                <Tooltip title="加到想看清單" aria-label="加到想看清單">
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={handleRemoveFromWishlist}
                  >
                    <Clear style={{ color: red[500], fontSize: '20px' }} />
                    在「想看清單」移除
                  </Button>
                </Tooltip>
              </div>
            </div>
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
