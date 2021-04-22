import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyFollowee from './MyFollowee';
import MyFollower from './MyFollower';
import SearchFollowee from './SearchFollowee';
import FolloweeActivity from './FolloweeActivity';
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FollowerList = (props: any) => {
  const classes = useStyles();
  const userId = props.userId;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="尋找書友" {...a11yProps(0)} />
          <Tab label="我的書友" {...a11yProps(1)} />
          <Tab label="書友動向" {...a11yProps(2)} />
          <Tab label="我的粉絲" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SearchFollowee userId={userId}></SearchFollowee>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyFollowee userId={userId}></MyFollowee>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FolloweeActivity userId={userId}></FolloweeActivity>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MyFollower userId={userId}></MyFollower>
      </TabPanel>
    </div>
  );
};

export default FollowerList;
