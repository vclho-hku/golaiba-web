import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red, green, yellow } from '@material-ui/core/colors';
import ThumbUp from '@material-ui/icons/ThumbUp';
import {
  PlaylistAdd,
  PlaylistAddCheck,
  Favorite,
  FavoriteBorder,
  Star,
  StarHalf,
  StarBorder,
} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';
import { AuthUserContext } from '../../Session';
import { useRouter } from 'next/router';
import authorToString from '../../util/authorToString';
import { ADD_WISH_LIST, REMOVE_WISH_LIST } from '../../query/user';
import { useMutation } from '@apollo/client';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 300,
      margin: '10px',
    },
    cardHeader: {
      cursor: 'pointer',
    },
    cardHeaderText: {
      width: 290,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    media: {
      height: '400px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const SlickSlide = (props: any) => {
  const bookInfo = props.data;
  const author = authorToString(bookInfo.authors);
  const authUser: any = useContext(AuthUserContext);
  const classes = useStyles();
  const router = useRouter();
  const [isInWishlist, setInWishlist] = useState(props.isInUserWishList);
  const [isInLibrary, setInLibrary] = useState(false);

  const [addWishList] = useMutation(ADD_WISH_LIST);
  const [removeWishList] = useMutation(REMOVE_WISH_LIST);

  useEffect(() => {
    setInWishlist(props.isInUserWishList);
  }, [props.isInUserWishList]);
  const handleAddToWishlist = () => {
    if (authUser) {
      setInWishlist(true);
      addWishList({
        variables: {
          uid: authUser.uid,
          bookId: bookInfo.id,
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
        bookId: bookInfo.id,
      },
    });
  };

  const handleAddToLibrary = () => {
    if (authUser) {
      setInLibrary(true);
    } else {
      router.push('login');
    }
  };

  return (
    <Card className={classes.root}>
      <Link href={`/book-details/${bookInfo.isbn}`}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardHeaderText,
            subheader: classes.cardHeaderText,
          }}
          title={bookInfo.id}
          subheader={author}
        />
      </Link>
      <Link href={`/book-details/${bookInfo.id}`}>
        <CardMedia
          className={classes.media}
          image={bookInfo.imageUrl.medium}
          title={bookInfo.title}
        />
      </Link>
      <CardActions disableSpacing>
        {isInWishlist ? (
          <Tooltip title="已加到想看清單" aria-label="已加到想看清單">
            <IconButton
              aria-label="已加到想看清單"
              onClick={handleRemoveFromWishlist}
            >
              <Favorite style={{ color: red[500] }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="加到想看清單" aria-label="加到想看清單">
            <IconButton aria-label="加到想看清單" onClick={handleAddToWishlist}>
              <FavoriteBorder />
            </IconButton>
          </Tooltip>
        )}
        {isInLibrary ? (
          <Tooltip title="已加到書櫃" aria-label="已加到書櫃">
            <IconButton aria-label="已加到想看清單">
              <PlaylistAddCheck style={{ color: green[500] }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="加到書櫃" aria-label="加到書櫃">
            <IconButton aria-label="加到書櫃" onClick={handleAddToLibrary}>
              <PlaylistAdd />
            </IconButton>
          </Tooltip>
        )}
        <Star style={{ color: yellow[600] }} />
        <StarHalf style={{ color: yellow[600] }} />
        <StarBorder style={{ color: yellow[600] }} />
      </CardActions>
    </Card>
  );
};

export default SlickSlide;
