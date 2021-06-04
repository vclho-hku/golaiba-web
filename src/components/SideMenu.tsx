import React from 'react';
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
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="最新精選" />
            </ListItem>
          </Link>
          <Link href={`/celebrity`}>
            <ListItem button key="名人書櫃" onClick={props.onClose}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="名人書櫃" />
            </ListItem>
          </Link>
          <ListItem button key="經典書籍">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="經典書籍" />
          </ListItem>
          <ListItem button key="看書好地方">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="看書好地方" />
          </ListItem>
          <Link href={`/discuss`}>
            <ListItem button key="討論區" onClick={props.onClose}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="討論區" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {['聯絡我們'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
