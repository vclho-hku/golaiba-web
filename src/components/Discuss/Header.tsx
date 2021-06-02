import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    leftPanel: {
      padding: '20px',
    },
    rightPanel: {
      padding: '20px',
    },
    button: {
      marginLeft: '10px',
      borderRadius: '20px',
    },
  }),
);

const Header = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            上書房
          </Link>
          <Typography color="textPrimary">討論區</Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.rightPanel}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<SearchIcon />}
        >
          搜尋主題
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          開新主題
        </Button>
      </div>
    </div>
  );
};

export default Header;
