import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import NavSearchBar from './NavSearchBar';
import Link from 'next/link';
import NavUserMenu from './NavUserMenu';
import CloseIcon from '@material-ui/icons/Close';
import { AuthUserContext, UserDataContext } from '../../Session';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    appButton: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    appIcon: {
      cursor: 'pointer',
      width: '100px',
    },
  }),
);

interface NavBarProps {
  onDrawerToggle: () => void;
}

const NavBar = (props: NavBarProps) => {
  const classes = useStyles();
  const authUserContext: any = useContext(AuthUserContext);
  const { userData } = useContext(UserDataContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { onDrawerToggle } = props;
  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };
  const handleShowSearchBarClose = () => {
    setShowSearchBar(false);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={1} alignItems="center" wrap="nowrap">
          <Grid item xs>
            <Grid container spacing={1} alignItems="center" wrap="nowrap">
              <Hidden mdUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Hidden xsDown>
                  <Grid item>
                    <Link href="/">
                      <img src="/Logo.png" className={classes.appIcon}></img>
                    </Link>
                  </Grid>
                </Hidden>
              </Hidden>
            </Grid>
          </Grid>
          <Hidden smUp>
            <Grid item>
              <Link href="/">
                <img src="/Logo.png" className={classes.appIcon}></img>
              </Link>
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid item xs={6}>
              <NavSearchBar></NavSearchBar>
            </Grid>
          </Hidden>
          <Grid item xs>
            <Grid
              container
              spacing={1}
              alignItems="center"
              wrap="nowrap"
              justify="flex-end"
            >
              {authUserContext && userData ? (
                <NavUserMenu
                  userId={userData.id}
                  handleShowSearchBar={handleShowSearchBar}
                />
              ) : (
                <div>
                  <Link href="/login">
                    <Button size="large" className={classes.appButton}>
                      登入
                    </Button>
                  </Link>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden smUp>
        {showSearchBar && (
          <Toolbar>
            <NavSearchBar></NavSearchBar>
            <CloseIcon onClick={handleShowSearchBarClose} />
          </Toolbar>
        )}
      </Hidden>
    </AppBar>
  );
};

export default NavBar;
