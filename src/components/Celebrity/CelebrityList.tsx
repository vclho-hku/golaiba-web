import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollableTabPanel from './ScrollableTabPanel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: 'relative',
      padding: '10px',
    },
  }),
);

const CelebrityList = (props: any) => {
  const classes = useStyles();
  const tabData = [
    {
      name: { zh_hk: '貝佐斯' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
        {
          id: '2',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
        {
          id: '3',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
        {
          id: '4',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
    {
      name: { zh_hk: '比爾．蓋茲' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
    {
      name: { zh_hk: '歐普拉' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
    {
      name: { zh_hk: '李開復' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
    {
      name: { zh_hk: '賴利．佩吉' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
    {
      name: { zh_hk: '雪柔．桑德伯格' },
      books: [
        {
          id: '1',
          title: 'test',
          authors: [{ name: { zh_hk: 'a' } }],
          imageUrl: {
            medium:
              'https://books.google.com/books/content/images/frontcover/bW7IDwAAQBAJ?fife=w400-h600',
          },
        },
      ],
    },
  ];
  return (
    <div>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5">名人推介</Typography>
        </div>
        <div style={{ position: 'absolute', right: '10px', top: '30%' }}>
          <Typography variant="caption"> &gt;&gt;更多名人推介</Typography>
        </div>
      </div>
      <ScrollableTabPanel data={tabData}></ScrollableTabPanel>
    </div>
  );
};

export default CelebrityList;
