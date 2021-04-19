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
import { red } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    root: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const UserSearchResultItem = (props: any) => {
  const user = props.user;
  const classes = useStyles();
  const addFriend = (userId: any) => {
    console.log(userId);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => addFriend(user._id)}>
            <AddIcon />
          </IconButton>
        }
        title={user.name}
        subheader={user.email}
      />
    </Card>
  );
};

export default UserSearchResultItem;
