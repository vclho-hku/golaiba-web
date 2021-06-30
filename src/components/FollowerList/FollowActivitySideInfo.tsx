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
import NewBookActivityPanel from './FollowActivityItems/NewBookActivityPanel';
import DiscussActivityPanel from './FollowActivityItems/DiscussActivityPanel';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '450px',
      marginLeft: '20px',
    },
  }),
);

const FollowActivitySideInfo = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NewBookActivityPanel />
      <div style={{ height: '40px' }}></div>
      <DiscussActivityPanel />
    </div>
  );
};

export default FollowActivitySideInfo;
