import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, yellow } from '@material-ui/core/colors';
import {
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
import { ADD_WISH_LIST, REMOVE_WISH_LIST } from '../../query/wishlist';
import { useMutation } from '@apollo/client';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 250,
      margin: '10px',
    },
    cardHeader: {
      cursor: 'pointer',
    },
    cardHeaderText: {
      width: 230,
      fontSize: '1.2rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    cardSubHeaderText: {
      width: 230,
      fontSize: '0.8rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    media: {
      height: '250px',
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

  return (
    <Card className={classes.root}>
      <Link href={`/book-details/${bookInfo.id}`}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardHeaderText,
            subheader: classes.cardSubHeaderText,
          }}
          title={bookInfo.title}
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
        <Rating
          name="read-only"
          value={bookInfo.rating}
          precision={0.5}
          readOnly
        />
        <Typography variant="body2">({bookInfo.ratingCount})</Typography>
      </CardActions>
    </Card>
  );
};

export default SlickSlide;
