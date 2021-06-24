import React, { FunctionComponent, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import BookCarousel from '../BookCarousel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { BOOK_PROMOTION_LIST } from '../../query/bookPromotionList';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    sectionContainer: {
      marginTop: '40px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '30px',
      },
    },
    title: {
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
  }),
);

const BookCarouselSection = (props: any) => {
  const classes = useStyles();
  const [userWishlist, setUserWishlist] = useState(props.userWishlist);
  const { loading, error, data } = useQuery(BOOK_PROMOTION_LIST, {
    variables: { key: props.sectionKey },
  });

  useEffect(() => {
    setUserWishlist(props.userWishlist);
  }, [props.userWishlist]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;

  return (
    <section>
      <div className={classes.sectionContainer} style={{ textAlign: 'center' }}>
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
      </div>
      <BookCarousel
        data={data.bookPromotionList.books}
        userWishList={userWishlist}
      ></BookCarousel>
    </section>
  );
};

export default BookCarouselSection;
