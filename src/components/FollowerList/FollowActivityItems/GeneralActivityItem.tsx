import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      maxWidth: '800px',
      marginTop: '15px',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    postUserContainer: {
      display: 'flex',
    },
    postUserDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    avatar: {
      margin: '10px',
    },
    postContentContainer: {
      display: 'flex',
      paddingLeft: '10px',
    },
    imageContainer: {
      padding: '10px 30px 0px 10px',
    },
    bookImage: {
      width: '150px',
    },
    postInfoContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '5px',
      marginRight: '10px',
    },
    postInfo: {
      fontSize: '14px',
      marginRight: '15px',
    },
  }),
);

const GeneralActivityItem = (props: any) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.postUserContainer}>
          <div>
            <Avatar className={classes.avatar}>
              {props.userName.charAt(0)}
            </Avatar>
          </div>
          <div className={classes.postUserDetailsContainer}>
            <div style={{ fontWeight: 'bold' }}>{props.userName}</div>
            <div style={{ fontSize: '10px' }}>{props.postTime}</div>
          </div>
        </div>
        <div className={classes.postContentContainer}>
          <div style={{ paddingTop: '5px', paddingRight: '5px', flexGrow: 1 }}>
            {ReactHtmlParser(props.content)}
          </div>
          <div className={classes.imageContainer}>
            <img className={classes.bookImage} src={props.imageUrl} />
          </div>
        </div>
      </div>
      <div className={classes.postInfoContainer}>
        <div className={classes.postInfo}>
          <Link href={`/`}>3 則留言</Link>
        </div>
        <div className={classes.postInfo}>
          <Link href={`/`}>5 次分享</Link>
        </div>
      </div>
    </Paper>
  );
};

export default GeneralActivityItem;
