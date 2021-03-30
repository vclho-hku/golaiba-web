import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_USER_BOOKSHELF } from '../../query/userBookshelf';
import UserBookshelfContainer from './UserBookshelfContainer';

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

const UserBookshelf = (props: any) => {
  // const classes = useStyles();
  // const { loading, error, data } = useQuery(GET_USER_BOOKSHELF, {
  //   variables: { id: props.userId },
  //   fetchPolicy: 'network-only',
  // });
  // if (loading)
  //   return (
  //     <div className={classes.loading}>
  //       <CircularProgress />
  //     </div>
  //   );
  // if (error) return <p>系統出現問題 :(</p>;
  // return (
  //   <div>
  //     {data.getWishlist.map((value: any, index: any) => {
  //       return <UserBookshelfContainer key={index} data={value} />;
  //     })}
  //   </div>
  // );
  return <UserBookshelfContainer></UserBookshelfContainer>;
};

export default UserBookshelf;
