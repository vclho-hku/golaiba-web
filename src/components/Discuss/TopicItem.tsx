import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    item: {
      paddingLeft: '5px',
    },
    itemHeader: {
      display: 'flex',
    },
    chip: {
      marginRight: '10px',
    },
  }),
);

const TopicItem = (props: any) => {
  const classes = useStyles();
  const data = props.data;
  return (
    <ListItem alignItems="flex-start">
      <div className={classes.container}>
        <div className={classes.item}>
          <div className={classes.itemHeader}>
            <div>
              <Chip
                className={classes.chip}
                size="small"
                icon={<FaceIcon />}
                label={data.creator}
                color="default"
              />
            </div>
            <div>{data.lastUpdate}</div>
            <div style={{ marginLeft: '10px' }}>
              <ThumbUpIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">{data.likeCount}</Typography>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <ChatBubbleIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">{data.totalComment}</Typography>
            </div>
          </div>
          <div>
            <Typography variant="h6">{data.topic}</Typography>
          </div>
        </div>
        {/* <div className={classes.rightPanel}>
          <div>
            <ThumbUpIcon />
          </div>
          <div>
            <Typography variant="subtitle1">{data.likeCount}</Typography>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <ChatBubbleIcon />
          </div>
          <div>
            <Typography variant="subtitle1">{data.likeCount}</Typography>
          </div>
        </div> */}
      </div>
    </ListItem>
  );
};

export default TopicItem;
