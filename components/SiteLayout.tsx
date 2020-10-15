import React from 'react';
import {
  createStyles,
  makeStyles,
  ThemeProvider,
  Theme
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../constant/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(8, 0),
    },
  }),
);

export interface SiteLayoutProps {
  children: React.ReactNode
}

const SiteLayout = ({children}: SiteLayoutProps) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Hidden smUp implementation="js">
          <SideMenu
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <NavBar onDrawerToggle={handleDrawerToggle} ></NavBar>
        <Hidden xsDown implementation="css">
          <SideMenu></SideMenu>
        </Hidden>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default SiteLayout;