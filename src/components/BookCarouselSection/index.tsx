import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import BookCarousel from '../BookCarousel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery, gql } from '@apollo/client';

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
const EXCHANGE_RATES = gql`
  query Test {
    users {
      uid
    }
  }
`;

const BookCarouselSection: FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;
  console.log(data);
  const dataHardcode = [
    {
      title: '拖延心理學',
      author: '珍‧博克（Jane B. Burka）& 萊諾拉‧袁（Lenora M. Yuen）',
      bookCoverImg:
        'https://books.google.com/books/publisher/content/images/frontcover/pFEyDwAAQBAJ?fife=w400-h600',
      isbn: '123',
    },
    {
      title: '擁抱的溫度',
      author: '米奇．艾爾邦 Mitch Albom',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/5KnoDwAAQBAJ?fife=w400-h600',
      isbn: '124',
    },
    {
      title: '早上最重要的3件事',
      author: '張永錫',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/HIPFCwAAQBAJ?fife=w400-h600',
      isbn: '125',
    },
    {
      title: '用生活常識就能看懂財務報表',
      author: '林明樟',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/X52-CwAAQBAJ?fife=w400-h600',
      isbn: '126',
    },
    {
      title: '沖繩Perfect超完美旅遊全攻略',
      author: '昭文社',
      bookCoverImg:
        'https://books.google.com/books/publisher/content/images/frontcover/haTQDwAAQBAJ?fife=w400-h600',
      isbn: '127',
    },
    {
      title: '拖延心理學',
      author: '珍‧博克（Jane B. Burka）& 萊諾拉‧袁（Lenora M. Yuen）',
      bookCoverImg:
        'https://books.google.com/books/publisher/content/images/frontcover/pFEyDwAAQBAJ?fife=w400-h600',
      isbn: '128',
    },
    {
      title: '擁抱的溫度',
      author: '米奇．艾爾邦 Mitch Albom',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/5KnoDwAAQBAJ?fife=w400-h600',
      isbn: '129',
    },
    {
      title: '早上最重要的3件事',
      author: '張永錫',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/HIPFCwAAQBAJ?fife=w400-h600',
    },
    {
      title: '用生活常識就能看懂財務報表',
      author: '林明樟',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/X52-CwAAQBAJ?fife=w400-h600',
    },
    {
      title: '沖繩Perfect超完美旅遊全攻略',
      author: '昭文社',
      bookCoverImg:
        'https://books.google.com/books/publisher/content/images/frontcover/haTQDwAAQBAJ?fife=w400-h600',
    },
  ];
  return (
    <section style={{ margin: '10px' }}>
      <div style={{ padding: '20px 0px 0px 20px' }}>
        <Typography variant="h4">{props.title}</Typography>
      </div>
      <BookCarousel data={dataHardcode}></BookCarousel>
    </section>
  );
};

export default BookCarouselSection;
