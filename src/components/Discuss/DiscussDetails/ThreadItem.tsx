import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReactHtmlParser from 'react-html-parser';
import Divider from '@material-ui/core/Divider';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: '15px',
      marginBottom: '15px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
    },
    chip: {
      marginLeft: '10px',
      marginRight: '10px',
    },
    thumbup: {
      marginLeft: '10px',
    },
    content: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
  }),
);

const ThreadItem = (props: any) => {
  const classes = useStyles();
  const data = props.data;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <Typography variant="subtitle2" color="textSecondary">
            #{data.threadId}
          </Typography>
        </div>
        <div className={classes.chip}>
          {data.gender === 'male' && (
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: '#468fff' }} />}
              label={data.writter}
              color="default"
            />
          )}
          {data.gender === 'female' && (
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: '#db46ff' }} />}
              label={data.writter}
              color="default"
            />
          )}
          {data.gender === 'unknown' && (
            <Chip
              size="small"
              icon={<FaceIcon style={{ color: grey[600] }} />}
              label={data.writter}
              color="default"
            />
          )}
        </div>
        <div>{data.threadDate}</div>
        <div className={classes.thumbup}>
          <ThumbUpIcon fontSize="small" />
        </div>
        <div style={{ marginLeft: '3px' }}>
          <Typography variant="subtitle2">{data.likeCount}</Typography>
        </div>
      </div>
      <div className={classes.content}>
        {ReactHtmlParser(data.threadContent)}
      </div>
      <Divider />
    </div>
  );
};

export default ThreadItem;
