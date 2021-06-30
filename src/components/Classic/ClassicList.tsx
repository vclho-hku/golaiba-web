import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollableTabPanel from '../Celebrity/ScrollableTabPanel';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: 'relative',
      padding: '10px',
    },
  }),
);

const ClassicList = (props: any) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '20px' }}>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5">經典{props.title}</Typography>
        </div>
        <div style={{ position: 'absolute', right: '10px', top: '30%' }}>
          <Typography variant="caption">更多經典{props.title}推介</Typography>
        </div>
      </div>
      <ScrollableTabPanel data={props.data}></ScrollableTabPanel>
    </div>
  );
};

export default ClassicList;
