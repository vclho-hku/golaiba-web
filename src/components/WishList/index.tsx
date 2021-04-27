import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_WISH_LIST } from '../../query/wishlist';
import WishBook from './WishBook';
import { AuthUserContext } from '../../Session';
import SectionBar from '../SectionBar';

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

const WishList = (props: any) => {
  const classes = useStyles();
  const authUser: any = useContext(AuthUserContext);
  const { loading, error, data } = useQuery(GET_WISH_LIST, {
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
      <SectionBar title="想看清單"></SectionBar>
      {authUser &&
        authUser.uid &&
        data.getWishlist.map((value: any, index: any) => {
          return <WishBook key={index} data={value} userUId={authUser.uid} />;
        })}
    </div>
  );
};

export default WishList;
