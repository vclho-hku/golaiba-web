import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserItem from './UserItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_FOLLOWEE_ACTIVITY } from '../../query/followList';
import AddToWishlistItem from './FollowActivityItems/AddToWishlistItem';
import AddToBookshelf from './FollowActivityItems/AddToBookshelf';
import WrittenBookReview from './FollowActivityItems/WrittenBookReview';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import {
  ADD_TO_WISHLIST,
  ADD_TO_BOOKSHELF,
  WRITTEN_BOOK_REVIEW,
  ADD_FOLLOWER,
} from '../../constant/UserActivityList';
import AddFollower from './FollowActivityItems/AddFollower';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Box from '@material-ui/core/Box';
import CollectionsRoundedIcon from '@material-ui/icons/CollectionsRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import FormatBoldRoundedIcon from '@material-ui/icons/FormatBoldRounded';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@material-ui/icons/FormatUnderlinedRounded';
import FormatAlignLeftRoundedIcon from '@material-ui/icons/FormatAlignLeftRounded';
import FormatAlignCenterRoundedIcon from '@material-ui/icons/FormatAlignCenterRounded';
import FormatAlignRightRoundedIcon from '@material-ui/icons/FormatAlignRightRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import GeneralActivityItem from './FollowActivityItems/GeneralActivityItem';
import testFollowerActivityData from './testFollowerActivityData';
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
