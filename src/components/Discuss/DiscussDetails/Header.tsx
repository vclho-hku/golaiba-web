import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftPanel: {
      padding: '15px',
    },
    rightPanel: {
      padding: '15px',
      display: 'flex',
    },
    button: {
      marginLeft: '10px',
      borderRadius: '20px',
    },
  }),
);

const Header = (props: any) => {
  const classes = useStyles();
  const topic = '香港邊度揾到村上春樹嘅小說？';
  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            上書房
          </Link>
          <Link color="inherit" href="/discuss">
            討論區
          </Link>
          <Typography color="textPrimary">{topic}</Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.rightPanel}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<WarningRoundedIcon />}
        >
          回報主題
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ShareIcon />}
        >
          分享主題
        </Button>
      </div>
    </div>
  );
};

export default Header;
