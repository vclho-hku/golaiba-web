import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import authorToString from '../../util/authorToString';
import { Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import BookDetailsInfoStyle from './BookDetailsInfoStyle';
import { AuthUserContext } from '../../Session';
import { ADD_WISH_LIST, REMOVE_WISH_LIST } from '../../query/wishlist';
import { ADD_TO_BOOKSHELF } from '../../query/userBookshelf';
import { useMutation } from '@apollo/client';
import { red, green, yellow } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import { useRouter } from 'next/router';
import { UserDataContext } from '../../Session';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import BookDetilsInfoTags from './BookDetailsInfoTags';
import BookDetailsDescription from './BookDetailsDescription';

const BookDetailsInfo = (props: any) => {
  const classes = props.classes;
  const { userData } = useContext(UserDataContext);
  const router = useRouter();
  const book = props.book;
  const [isInWishlist, setInWishlist] = useState(props.isInWishlist);
  const [isInBookshelf, setInBookshelf] = useState(props.isInBookshelf);

  const [addWishList] = useMutation(ADD_WISH_LIST);
  const [removeWishList] = useMutation(REMOVE_WISH_LIST);
  const [addToBookshelf] = useMutation(ADD_TO_BOOKSHELF);
  const authUser: any = useContext(AuthUserContext);

  const author = authorToString(book.authors);

  const handleAddToBookshelf = () => {
    if (userData) {
      setInBookshelf(true);
      addToBookshelf({
        variables: {
          userId: userData.id,
          bookId: book.id,
        },
      });
    } else {
      router.push('login');
    }
  };
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

  const handleRemoveFromWishlist = () => {
    setInWishlist(false);
    removeWishList({
      variables: {
        uid: authUser.uid,
        bookId: book.id,
      },
    });
  };

  useEffect(() => {
    setInWishlist(props.isInWishlist);
  }, [props.isInWishlist]);

  useEffect(() => {
    setInBookshelf(props.isInBookshelf);
  }, [props.isInBookshelf]);

  return (
    <div style={{ marginLeft: '20px' }}>
      <BookDetilsInfoTags />
      <div className={classes.container}>
        <div style={{ marginRight: '30px' }}>
          <div>
            <img className={classes.bookImage} src={book.imageUrl.medium} />
          </div>
          <div className={classes.bookShareContainer}>
            <div>分享至：</div>
            <div style={{ marginRight: '10px' }}>
              <img src="/facebook.svg"></img>
            </div>
            <div style={{ marginRight: '10px' }}>
              <img src="/twitter.svg"></img>
            </div>
            <div style={{ marginRight: '10px' }}>
              <img src="/instagram.svg"></img>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.title}>
            <Typography variant="h5" component="h5">
              {book.title}
            </Typography>
          </div>
          <div className={classes.bookInfoSubInfoContainer}>
            <div className={classes.bookInfoSubInfoTitle}>作者: </div>
            <div>{author}</div>
          </div>
          <div className={classes.bookInfoSubInfoContainer}>
            <div className={classes.bookInfoSubInfoTitle}>出版日期:</div>
            <div>{book.publishDate}</div>
          </div>
          <div className={classes.bookInfoSubInfoContainer}>
            <div className={classes.bookInfoSubInfoTitle}>出版社:</div>
            <div>{book.publisher.name.zh_hk}</div>
          </div>
          <div className={classes.bookInfoSubInfoContainer}>
            <div className={classes.bookInfoSubInfoTitle}>ISBN:</div>
            <div>{book.isbn}</div>
          </div>

          <div className={classes.bottonContainer}>
            <div style={{ margin: '10px' }}>
              {isInWishlist ? (
                <Tooltip title="已加到想看清單" aria-label="已加到想看清單">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleRemoveFromWishlist}
                  >
                    <Favorite style={{ color: red[500], fontSize: '15px' }} />
                    已加到想看清單
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title="加到想看清單" aria-label="加到想看清單">
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
            </div>
            <div style={{ margin: '10px' }}>
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
                    加到我的書櫃
                  </Button>
                </Tooltip>
              )}
            </div>
          </div>
          <BookDetailsDescription description={book.description} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(BookDetailsInfoStyle)(BookDetailsInfo);
