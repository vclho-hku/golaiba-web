import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    item: {
      margin: '15px',
    },
  }),
);

const ThreadHeader = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Button startIcon={<ArrowLeftIcon />} disabled>
          上一頁
        </Button>
      </div>
      <div className={classes.item}>
        <Button endIcon={<ArrowDropDownIcon />}>第一頁</Button>
      </div>
      <div className={classes.item}>
        <Button endIcon={<ArrowRightIcon />}>下一頁</Button>
      </div>
    </div>
  );
};

export default ThreadHeader;
