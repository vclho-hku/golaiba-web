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
        <Typography variant="h6" noWrap>
          上書房
        </Typography>
      </Toolbar>
      <div className={classes.drawerContainer}>
        <List>
          {['最新精選', '名人書櫃', '經典書籍', '看書好地方'].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
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
