import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BY_SEARCH } from '../../query/user';
import UserSearchResultItem from './UserSearchResultItem';

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

const UserSearchResult = (props: any) => {
  const classes = useStyles();
  const [getUserBySearch, { loading, error, data }] = useLazyQuery(
    GET_USER_BY_SEARCH,
    {
      variables: {
        userId: props.userId,
        keywords: props.keywords,
      },
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (props.keywords && props.userId) {
      getUserBySearch();
    }
  }, [props.keywords, props.userId]);

  if (props.keywords) {
    if (loading)
      return (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      );
    if (error) return <div>系統出現問題 :(</div>;
    if (data) {
      return (
        <div>
          {data.getUserBySearch.map((userFound: any) => {
            return (
              <UserSearchResultItem
                key={userFound._id}
                userId={props.userId}
                userFound={userFound}
              ></UserSearchResultItem>
            );
          })}
        </div>
      );
    }
  }
  return <div></div>;
};

export default UserSearchResult;