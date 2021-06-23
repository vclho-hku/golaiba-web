import React, { useContext, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_WISH_LIST } from '../../query/wishlist';
import WishBook from './WishBook';
import { AuthUserContext } from '../../Session';
import SectionBar from '../SectionBar';
import { NoBook } from '../Share';
import Typography from '@material-ui/core/Typography';

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
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getWishlist, { data }] = useLazyQuery(GET_WISH_LIST, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    getWishlist({ variables: { id: props.userId } });
  }, [props.userId, getWishlist]);

  useEffect(() => {
    if (data) {
      setWishlist(data.getWishlist);
      setLoading(false);
    }
  }, [data]);

  const handleRemoveWishlistBook = (id: any) => {
    setWishlist(wishlist.filter((book: any) => book.id !== id));
  };
  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  return (
    <div>
      {!props.noNeedTitle && <SectionBar title="想看清單"></SectionBar>}
      {wishlist.length == 0 && (
        <NoBook>
          <Typography variant="body1">你還未加入任何書本至願望清單</Typography>
        </NoBook>
      )}
      {authUser &&
        authUser.uid &&
        wishlist.map((value: any, index: any) => {
          return (
            <WishBook
              key={index}
              data={value}
              userUId={authUser.uid}
              removeBook={handleRemoveWishlistBook}
            />
          );
        })}
    </div>
  );
};

export default WishList;
