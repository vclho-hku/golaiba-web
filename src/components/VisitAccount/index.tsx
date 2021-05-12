import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_DETAILS } from '../../query/user';
import VisitAccountContainer from './VisitAccountContainer';

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

const VisitAccount = (props: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [getUserDetails, { data: userDetailsData }] = useLazyQuery(
    GET_USER_DETAILS,
    {
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (props.userId) {
      getUserDetails({ variables: { id: props.userId } });
    }
  }, [props.userId]);

  useEffect(() => {
    if (userDetailsData) {
      setUserDetails(userDetailsData);
      setLoading(false);
    }
  }, [userDetailsData]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <VisitAccountContainer data={userDetails} />
    </div>
  );
};

export default VisitAccount;
