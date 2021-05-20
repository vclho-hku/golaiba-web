import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from 'next/link';
import SubNavBarContext from '../Context/SubNavBarContext';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const SubNavBar = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const { subNavBarValue } = useContext(SubNavBarContext);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={subNavBarValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link href={`/`}>
          <Tab label="最新精選" />
        </Link>
        <Link href={`/celebrity`}>
          <Tab label="名人書櫃" />
        </Link>
        <Tab label="經典書籍" />
        <Tab label="看書好地方" />
      </Tabs>
    </Paper>
  );
};

export default SubNavBar;
