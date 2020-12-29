import React, { FunctionComponent } from 'react';
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
  }),
);

const BookCarouselSection: FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(BOOK_PROMOTION_LIST, {
    variables: { key: props.sectionKey },
  });

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;

  return (
    <section style={{ margin: '10px' }}>
      <div style={{ padding: '20px 0px 0px 20px' }}>
        <Typography variant="h4">{props.title}</Typography>
      </div>
      <BookCarousel data={data.bookPromotionList.books}></BookCarousel>
    </section>
  );
};

export default BookCarouselSection;
