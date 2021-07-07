import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
    },
    panel: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },
    titleContainer: {
      width: '100%',
      height: '50px',
      borderRadius: '3px 3px 0px 0px',
      backgroundColor: '#dec199',
      display: 'flex',
      alignItems: 'center',
      color: 'black',
      fontWeight: 'bold',
      paddingLeft: '10px',
      fontSize: '20px',
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
    },
  }),
);

const DiscussActivityPanel = (props: any) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.titleContainer}>
          <div>討論區熱話</div>
        </div>
      </div>
      <div className={classes.itemContainer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: grey[600] }} />}
              label="尖沙咀金庸"
              color="default"
            />
          </div>
          <div
            style={{ marginLeft: '3px', fontSize: '10px', color: grey[600] }}
          >
            2021/07/11 13:12
          </div>
        </div>
        <div style={{ paddingTop: '10px', fontWeight: 'bold' }}>
          香港邊度搵到村上春樹嘅小說？
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '10px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ThumbUpIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">5</Typography>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ChatBubbleIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">35</Typography>
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ margin: '10px' }} />
      <div className={classes.itemContainer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: '#468fff' }} />}
              label="將軍澳姜濤"
              color="default"
            />
          </div>
          <div
            style={{ marginLeft: '3px', fontSize: '10px', color: grey[600] }}
          >
            2021/07/11 12:12
          </div>
        </div>
        <div style={{ paddingTop: '10px', fontWeight: 'bold' }}>
          你地最鐘意古龍邊部作品？
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '10px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ThumbUpIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">64</Typography>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ChatBubbleIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">213</Typography>
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ margin: '10px' }} />
      <div className={classes.itemContainer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: '#db46ff' }} />}
              label="晴晴"
              color="default"
            />
          </div>
          <div
            style={{ marginLeft: '3px', fontSize: '10px', color: grey[600] }}
          >
            2021/07/11 10:12
          </div>
        </div>
        <div style={{ paddingTop: '10px', fontWeight: 'bold' }}>
          日本小說推介
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '10px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ThumbUpIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">32</Typography>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '3px' }}>
              <ChatBubbleIcon fontSize="small" />
            </div>
            <div>
              <Typography variant="subtitle2">65</Typography>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default DiscussActivityPanel;
