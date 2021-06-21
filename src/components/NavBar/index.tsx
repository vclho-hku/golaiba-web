import React, { useContext } from 'react';
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
  const { onDrawerToggle } = props;

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
              </Hidden>
              <Grid item>
                <Link href="/">
                  <img src="/Logo.png" className={classes.appIcon}></img>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <NavSearchBar></NavSearchBar>
          </Grid>
          <Grid item xs>
            <Grid
              container
              spacing={1}
              alignItems="center"
              wrap="nowrap"
              justify="flex-end"
            >
              {authUserContext && userData ? (
                <NavUserMenu userId={userData.id} />
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
    </AppBar>
  );
};

export default NavBar;
