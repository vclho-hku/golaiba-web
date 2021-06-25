import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ClassicList from './ClassicList';
import {
  testingFictionData,
  testingPhysoData,
  testingManagementData,
} from './testingData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
  }),
);

const Classic = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.banner}>
        <Hidden xsDown>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="/classic.png"
          ></img>
        </Hidden>
        <Hidden smUp>
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="/classic_mob.jpg"
          ></img>
        </Hidden>
      </div>
      <ClassicList title={'文學'} data={testingFictionData}></ClassicList>
      <ClassicList title={'哲學'} data={testingPhysoData}></ClassicList>
      <ClassicList title={'管理學'} data={testingManagementData}></ClassicList>
    </div>
  );
};

export default Classic;
