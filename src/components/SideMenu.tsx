import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import ForumIcon from '@material-ui/icons/Forum';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Hidden from '@material-ui/core/Hidden';
import { AuthUserContext, UserDataContext } from '../Session';
import Favorite from '@material-ui/icons/Favorite';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import Logout from '../components/Logout';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    appIcon: {
      width: '100px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }),
);

export const drawerWidth = 200;

interface SideMenuProps {
  variant?: 'temporary' | 'permanent' | 'persistent';
  open?: boolean | undefined;
  onClose?: any;
}

const SideMenu = (props: SideMenuProps) => {
  const classes = useStyles();
  const authUserContext: any = useContext(AuthUserContext);
  const { userData } = useContext(UserDataContext);
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      {...props}
    >
      <Toolbar className={classes.toolbar}>
        <img src="/logo.svg" className={classes.appIcon}></img>
      </Toolbar>
      <div className={classes.drawerContainer}>
        <List>
          <Link href={`/`}>
            <ListItem button key="最新精選" onClick={props.onClose}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faRss} size="lg" />
              </ListItemIcon>
              <ListItemText primary="最新精選" />
            </ListItem>
          </Link>
          <Link href={`/discuss`}>
            <ListItem button key="討論區" onClick={props.onClose}>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="討論區" />
            </ListItem>
          </Link>
          <Link href={`/celebrity`}>
            <ListItem button key="名人書櫃" onClick={props.onClose}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faBookReader} size="lg" />
              </ListItemIcon>
              <ListItemText primary="名人書櫃" />
            </ListItem>
          </Link>
          <Link href={`/classic`}>
            <ListItem button key="經典書籍" onClick={props.onClose}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHistory} size="lg" />
              </ListItemIcon>
              <ListItemText primary="經典書籍" />
            </ListItem>
          </Link>
          <Link href={`/good-place`}>
            <ListItem button key="看書好地方" onClick={props.onClose}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faMugHot} size="lg" />
              </ListItemIcon>
              <ListItemText primary="看書好地方" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {authUserContext && userData && (
          <Hidden smUp>
            <List>
              <Link href={`/user/${userData.id}/myaccount`}>
                <ListItem button key="我的帳戶" onClick={props.onClose}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="我的帳戶" />
                </ListItem>
              </Link>
              <Link href={`/user/${userData.id}/wishlist`}>
                <ListItem button key="想看清單" onClick={props.onClose}>
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="想看清單" />
                </ListItem>
              </Link>
              <Link href={`/user/${userData.id}/bookshelf`}>
                <ListItem button key="我的書櫃" onClick={props.onClose}>
                  <ListItemIcon>
                    <img
                      style={{ width: '24px', color: 'white' }}
                      src="/bookshelf_grey.svg"
                    ></img>
                  </ListItemIcon>
                  <ListItemText primary="我的書櫃" />
                </ListItem>
              </Link>
              <Link href={`/user/${userData.id}/follower-list`}>
                <ListItem button key="書友動向" onClick={props.onClose}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="書友動向" />
                </ListItem>
              </Link>
              <ListItem button key="登出" onClick={props.onClose}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <Logout></Logout>
              </ListItem>
            </List>
            <Divider />
          </Hidden>
        )}
        <List>
          {['聯絡我們'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideMenu;
