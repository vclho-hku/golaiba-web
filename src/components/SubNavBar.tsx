import React, { useContext } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from 'next/link';
import SubNavBarContext from '../Context/SubNavBarContext';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      marginTop: '60px',
    },
  }),
);

const CustTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: theme.typography.fontWeightRegular,
      '&:focus': {
        fontWeight: theme.typography.fontWeightBold,
      },
      '&:hover': {
        fontWeight: theme.typography.fontWeightBold,
      },
      '&$selected': {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    selected: {},
  }),
)((props: any) => <Tab disableRipple {...props} />);

const SubNavBar = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const { subNavBarValue } = useContext(SubNavBarContext);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Paper className={classes.root}>
        <Tabs
          value={subNavBarValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link href={`/`}>
            <CustTab label="主頁" />
          </Link>
          <Link href={`/celebrity`}>
            <CustTab label="名人書櫃" />
          </Link>
          <Link href={`/classic`}>
            <CustTab label="經典書籍" />
          </Link>
          <Link href={`/good-place`}>
            <CustTab label="看書好地方" />
          </Link>
          <Link href={`/discuss`}>
            <CustTab label="討論區" />
          </Link>
        </Tabs>
      </Paper>
    </AppBar>
  );
};

export default SubNavBar;
