import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red, blue } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import Link from 'next/link';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: '15px',
      position: 'relative',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardHeader: {
      cursor: 'pointer',
    },
    removeIcon: {
      position: 'absolute',
      top: '25%',
      left: '80%',
    },
  }),
);

const UserItem = (props: any) => {
  const classes = useStyles();
  const user = props.user;
  const handleDelete = () => {
    props.handleDeleteFollower(props.user.id);
  };
  if (props.canRemove) {
    return (
      <div>
        <Card className={classes.root}>
          <Link href={`/user/${props.user.id}`}>
            <CardHeader
              className={classes.cardHeader}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title={user.name}
            />
          </Link>
          <div className={classes.removeIcon}>
            <IconButton onClick={handleDelete}>
              <HighlightOffIcon />
            </IconButton>
          </div>
        </Card>
      </div>
    );
  }
  return (
    <Card className={classes.root}>
      <Link href={`/user/${props.user.id}`}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={user.name}
        />
      </Link>
    </Card>
  );
};

export default UserItem;
