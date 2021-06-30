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
import FollowActivitySideInfo from './FollowActivitySideInfo';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      flexGrow: 1,
    },
    writePostOuterContainer: {
      width: '100%',
      maxWidth: '800px',
    },
    writePostContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },
    writeTitleContainer: {
      width: '100%',
      height: '50px',
      borderRadius: '3px 3px 0px 0px',
      backgroundColor: '#baad72',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      paddingLeft: '10px',
      fontSize: '20px',
    },
    writePostDetailsContainer: {
      paddingLeft: '5px',
    },
    toolBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '5px',
      },
    },
    toolBar: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
    },
    submitContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
    },
    separator: {
      borderRight: '2px solid black',
      paddingLeft: '3px',
      height: '15px',
    },
    inputBox: {
      marginBottom: '0px',
      padding: '0px',
    },
  }),
);

const FolloweeActivity = (props: any) => {
  const classes = useStyles();
  const { loading, error, data: followeeActivityData } = useQuery(
    GET_FOLLOWEE_ACTIVITY,
    {
      variables: { userId: props.userId },
      fetchPolicy: 'network-only',
    },
  );

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  if (followeeActivityData.getFolloweeActivity.length == 0) {
    return (
      <div>
        <Typography variant="h5">沒有書友近況</Typography>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.mainContainer}>
        <Paper elevation={3} className={classes.writePostOuterContainer}>
          <div className={classes.writePostContainer}>
            <div className={classes.writeTitleContainer}>
              <div>你的分享</div>
            </div>
            <div className={classes.writePostDetailsContainer}>
              <div>
                <Box
                  component="fieldset"
                  mb={1}
                  borderColor="transparent"
                  className={classes.inputBox}
                >
                  <TextareaAutosize
                    aria-label="review"
                    rowsMin={5}
                    placeholder="分享內容"
                    style={{ width: '100%' }}
                  />
                </Box>
              </div>
            </div>
            <div className={classes.toolBarContainer}>
              <div className={classes.toolBar}>
                <div>
                  <IconButton aria-label="image">
                    <CollectionsRoundedIcon />
                  </IconButton>
                </div>
                <div className={classes.separator}></div>
                <div>
                  <IconButton aria-label="color">
                    <ColorLensRoundedIcon />
                  </IconButton>
                </div>
                <div className={classes.separator}></div>
                <div>
                  <IconButton aria-label="bold">
                    <FormatBoldRoundedIcon />
                  </IconButton>
                </div>
                <div className={classes.separator}></div>
                <div>
                  <IconButton aria-label="italic">
                    <FormatItalicRoundedIcon />
                  </IconButton>
                </div>
                <div className={classes.separator}></div>
                <div>
                  <IconButton aria-label="underline">
                    <FormatUnderlinedRoundedIcon />
                  </IconButton>
                </div>
              </div>
              <div className={classes.submitContainer}>
                <Button variant="contained" endIcon={<SendRoundedIcon />}>
                  發表主題
                </Button>
              </div>
            </div>
          </div>
        </Paper>
        {testFollowerActivityData.map((post: any, index: any) => {
          return (
            <GeneralActivityItem
              key={index}
              userName={post.userName}
              postTime={post.postTime}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          );
        })}
      </div>
      <Hidden smDown>
        <FollowActivitySideInfo />
      </Hidden>
    </div>
  );
};

export default FolloweeActivity;
