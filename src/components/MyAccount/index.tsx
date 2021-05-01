import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_DETAILS } from '../../query/user';
import MyAccountForm from './MyAccountForm';

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
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { id: props.userId },
    fetchPolicy: 'network-only',
  });
  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  return (
    <div>
      <MyAccountForm data={data} />
    </div>
  );
};

export default MyAccount;
