import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerContainer: {
      // backgroundColor: '#757575',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      color: '#757575',
      fontSize: '16px',
      paddingTop: '10px',
    },
    titleContainer: {
      margin: '5px',
      display: 'flex',
      justifyContent: 'center',
      color: '#757575',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    separator: {
      borderRight: '2px solid #757575',
      padding: '3px',
      marginTop: '5px',
      marginRight: '10px',
      height: '14px',
    },
  }),
);

const Footer = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.outerContainer}>
      <Divider style={{ marginTop: '40px', marginBottom: '10px' }} />
      <div className={classes.container}>
        <div>
          <Link href={'/'}>私隱政策</Link>
        </div>
        <div className={classes.separator}></div>
        <div>
          <Link href={'/'}>使用條款</Link>
        </div>
        <div className={classes.separator}></div>
        <div>
          <Link href={'/'}>聯絡我們</Link>
        </div>
      </div>
      <div className={classes.titleContainer}>
        <div>版權所有 2021 上書房 GOLAIBA</div>
      </div>
    </div>
  );
};

export default Footer;
