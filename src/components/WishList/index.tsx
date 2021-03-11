import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_WISH_LIST } from '../../query/wishlist';
import WishBook from './WishBook';

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
  const { loading, error, data } = useQuery(GET_WISH_LIST, {
    variables: { id: props.userId },
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
      {data.getWishlist.map((value: any, index: any) => {
        return <WishBook key={index} data={value} />;
      })}
    </div>
  );
};

export default WishList;
