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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    newBookContainer: {
      width: '100%',
    },
    newBookPanel: {
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
    newBookDetailsContainer: {
      display: 'flex',
      paddingTop: '5px',
      paddingRight: '10px',
    },
    bookImage: {
      width: '90px',
    },
    bookDetailsInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const NewBookActivityPanel = (props: any) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.newBookContainer}>
      <div className={classes.newBookPanel}>
        <div className={classes.titleContainer}>
          <div>新書速遞</div>
        </div>
        <div className={classes.newBookDetailsContainer}>
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '10px' }}
          >
            <img
              className={classes.bookImage}
              src="https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600"
            />
          </div>
          <div className={classes.bookDetailsInfoContainer}>
            <div style={{ fontWeight: 'bold' }}>邊寫邊思考的大腦整理筆記法</div>
            <div style={{ fontSize: '12px', color: '#757575' }}>齋藤孝</div>
            <div style={{ height: '5px' }}></div>
            <div style={{ fontSize: '10px', color: '#757575' }}>
              原來，筆記除了有記錄的功能之外， 還可以成為你外掛的第二大腦，
              讓邏輯思維變清晰，更能活用在人生六大面向！
            </div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '13px',
                color: '#827717',
                paddingTop: '2px',
              }}
            >
              2021年6月30日
            </div>
          </div>
        </div>
        <Divider style={{ margin: '10px' }} />
        <div className={classes.newBookDetailsContainer}>
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '10px' }}
          >
            <img
              className={classes.bookImage}
              src="https://books.google.com/books/content/images/frontcover/oDhqDwAAQBAJ?fife=w400-h600"
            />
          </div>
          <div className={classes.bookDetailsInfoContainer}>
            <div style={{ fontWeight: 'bold' }}>社交天性</div>
            <div style={{ fontSize: '12px', color: '#757575' }}>
              馬修．利伯曼
            </div>
            <div style={{ height: '10px' }}></div>
            <div style={{ fontSize: '10px', color: '#757575' }}>
              連結，是我們渴求人際社交的欲望，感受痛苦與快樂的能力。這是社交天性三大適應的基礎。當社交連結有所威脅時，大腦會感受到與生理疼痛一樣的痛苦。因此我們難以忍受與摯愛之人分離、遭受同儕排擠、不被他人認同。
            </div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '13px',
                color: '#827717',
                paddingTop: '2px',
              }}
            >
              2021年7月15日
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '10px' }}></div>
    </Paper>
  );
};

export default NewBookActivityPanel;
