import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { UserDataContext } from '../../Session';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyAccountPage from './MyAccountPage';
import { NoAccessRight } from '../../components/Share/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const MyAccount = (props: any) => {
  const classes = useStyles();
  const { userData } = useContext(UserDataContext);

  if (userData) {
    if (userData.id != props.userId) {
      return <NoAccessRight></NoAccessRight>;
    } else {
      return <MyAccountPage userId={props.userId} />;
    }
  } else {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
};

export default MyAccount;
