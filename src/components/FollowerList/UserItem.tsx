import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red, blue, grey } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import CheckIcon from '@material-ui/icons/Check';
import Link from 'next/link';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      height: 100,
      margin: '15px',
      position: 'relative',
      cursor: 'pointer',
    },
    avatar: {
      width: '100%',
      height: '100%',
      padding: '2px',
      fontSize: '30px',
    },
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      padding: '10px',
    },
    avatarContainer: {
      width: '120px',
      height: '100%',
    },
    userInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      paddingLeft: '10px',
      justifyContent: 'space-between',
    },
    userInfoSubTitle: {
      fontSize: '9px',
      color: grey[600],
    },
    userInfoIconContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    removeIcon: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
    },
  }),
);

const UserItem = (props: any) => {
  const classes = useStyles();
  const user = props.user;
  const [followed, setFollowed] = useState(false);
  const handleDelete = () => {
    props.handleDeleteFollower(props.user.id);
  };
  const handleFollow = (event: any) => {
    event.preventDefault();
    setFollowed(true);
  };
  return (
    <div>
      <Link href={`/user/${props.user.id}`}>
        <Paper elevation={3} className={classes.root}>
          <div className={classes.container}>
            <div className={classes.avatarContainer}>
              {user.avatarImgUrl.medium && (
                <Avatar
                  variant="rounded"
                  src={user.avatarImgUrl.small}
                  className={classes.avatar}
                ></Avatar>
              )}
              {!user.avatarImgUrl.medium && (
                <Avatar variant="rounded" className={classes.avatar}>
                  {user.name.charAt(0)}
                </Avatar>
              )}
            </div>
            <div className={classes.userInfoContainer}>
              <div>
                <div>{user.name}</div>
                {props.canRemove && (
                  <div className={classes.userInfoSubTitle}>101本藏書</div>
                )}
                {!props.canRemove && (
                  <div className={classes.userInfoSubTitle}>13個共同朋友</div>
                )}
              </div>

              {props.canRemove && (
                <div className={classes.userInfoIconContainer}>
                  <div>
                    <Link href={`/user/${user.id}/bookshelf/visit`}>
                      <Button size="small" variant="contained" color="primary">
                        <CollectionsBookmarkIcon
                          style={{ fontSize: '15px', marginRight: '3px' }}
                        />
                        前往書櫃
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {!props.canRemove && (
                <div className={classes.userInfoIconContainer}>
                  <div style={{ marginRight: '5px' }}>
                    <Link href={`/user/${user.id}/bookshelf/visit`}>
                      <Button size="small" variant="contained" color="primary">
                        <CollectionsBookmarkIcon
                          style={{ fontSize: '15px', marginRight: '5px' }}
                        />
                        書櫃
                      </Button>
                    </Link>
                  </div>
                  <div>
                    {!followed && (
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleFollow}
                      >
                        <AddIcon
                          style={{ fontSize: '15px', marginRight: '3px' }}
                        />
                        追蹤
                      </Button>
                    )}
                    {followed && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleFollow}
                      >
                        <CheckIcon
                          style={{ fontSize: '15px', marginRight: '3px' }}
                        />
                        已追蹤
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {props.canRemove && (
            <div className={classes.removeIcon}>
              <IconButton onClick={handleDelete}>
                <HighlightOffIcon />
              </IconButton>
            </div>
          )}
        </Paper>
      </Link>
    </div>
  );
};

export default UserItem;
