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
import { ADD_FOLLOWEE } from '../../query/followList';
import { useMutation } from '@apollo/client';
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
  const userFound = props.userFound;
  const classes = useStyles();
  const [isInFolloweeList, setInFolloweeList] = useState(false);
  const [addFollowee, { loading: addFolloweeLoading }] = useMutation(
    ADD_FOLLOWEE,
  );
  const addFriend = (followeeId: any) => {
    addFollowee({
      variables: {
        userId: props.userId,
        followeeId: followeeId,
      },
    });
    setInFolloweeList(true);
  };

  useEffect(() => {
    if (addFolloweeLoading == false) {
      props.refreshFolloweeList();
    }
  }, [addFolloweeLoading]);

  return (
    <Card className={classes.root}>
      {isInFolloweeList ? (
        <CardHeader
          avatar={
            <Avatar
              src={props.avatarImgUrl}
              aria-label="recipe"
              className={classes.avatar}
            >
              {!props.avatarImgUrl && userFound.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" disabled>
              <DoneIcon style={{ color: blue[500] }} />
            </IconButton>
          }
          title={userFound.name}
        />
      ) : (
        <CardHeader
          avatar={
            <Avatar
              src={props.avatarImgUrl}
              aria-label="recipe"
              className={classes.avatar}
            >
              {!props.avatarImgUrl && userFound.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={() => addFriend(userFound._id)}
            >
              <AddIcon />
            </IconButton>
          }
          title={userFound.name}
        />
      )}
    </Card>
  );
};

export default UserSearchResultItem;
