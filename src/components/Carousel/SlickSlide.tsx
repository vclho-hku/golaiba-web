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
      width: 300,
      margin: '10px',
    },
    header: {
      width: 200,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    media: {
      height: '400px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const SlickSlide = (props: any) => {
  const bookInfo = props.data;
  const classes = useStyles();
  const [isInPendingToReadlist, setIsInPendingToReadlist] = useState(false);
  const handleAddToPendingToReadlist = () => {
    setIsInPendingToReadlist(true);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          title: classes.header,
          subheader: classes.header,
        }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <IconButton aria-label="settings">
              <ThumbUp style={{ color: 'white' }} />
            </IconButton>
          </Avatar>
        }
        title={bookInfo.title}
        subheader={bookInfo.author}
      />
      <CardMedia
        className={classes.media}
        image={bookInfo.bookCoverImg}
        title={bookInfo.title}
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
