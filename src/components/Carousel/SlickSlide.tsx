import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ThumbUp from '@material-ui/icons/ThumbUp';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: '20px',
    },
    media: {
      height: '400px',
      paddingTop: '0%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const SlickSlide = () => {
  const classes = useStyles();

  const [isInPendingToReadlist, setIsInPendingToReadlist] = useState(false);
  const handleAddToPendingToReadlist = () => {
    setIsInPendingToReadlist(true);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <IconButton aria-label="settings">
              <ThumbUp style={{ color: 'white' }} />
            </IconButton>
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://books.google.com/books/content/images/frontcover/JG1YDwAAQBAJ?fife=w400-h600"
        title="Paella dish"
      />
      <CardActions disableSpacing>
        {isInPendingToReadlist ? (
          <Tooltip title="已加到待閱清單" aria-label="已加到待閱清單">
            <IconButton aria-label="已加到待閱清單">
              <PlaylistAddCheck color="primary" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="加到待閱清單" aria-label="加到待閱清單">
            <IconButton
              aria-label="加到待閱清單"
              onClick={handleAddToPendingToReadlist}
            >
              <PlaylistAdd />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default SlickSlide;
