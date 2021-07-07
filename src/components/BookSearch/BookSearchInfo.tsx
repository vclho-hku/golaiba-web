import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import authorToString from '../../util/authorToString';
import { red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 200,
      margin: '10px',
    },
    cardHeader: {
      cursor: 'pointer',
    },
    cardHeaderText: {
      width: 190,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    media: {
      height: '280px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const BookSearchInfo = (props: any) => {
  const bookInfo = props.book;
  const author = authorToString(bookInfo.authors);
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Link href={`/book-details/${bookInfo.id}`}>
          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: classes.cardHeaderText,
              subheader: classes.cardHeaderText,
            }}
            title={bookInfo.title}
            subheader={author}
          />
        </Link>
        <Link href={`/book-details/${bookInfo._id}`}>
          <CardMedia
            className={classes.media}
            image={bookInfo.imageUrl.medium}
            title={bookInfo.title}
          />
        </Link>
      </Card>
    </div>
  );
};

export default BookSearchInfo;
