import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollableTabPanel from './ScrollableTabPanel';
import { STAR_PRIZE_LIST } from '../../query/celebrity';
import { useLazyQuery } from '@apollo/client';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: 'relative',
      padding: '10px',
    },
  }),
);

const PrizeList = (props: any) => {
  const classes = useStyles();
  const [starPrizeList, setStarPrizeList] = useState([]);
  const [getStarPrizeList, { data: starPrizeListData }] = useLazyQuery(
    STAR_PRIZE_LIST,
    {
      fetchPolicy: 'network-only',
    },
  );
  useEffect(() => {
    getStarPrizeList();
  }, []);
  useEffect(() => {
    if (starPrizeListData) {
      setStarPrizeList(starPrizeListData.starPrizeList);
      console.log(starPrizeListData.starPrizeList);
    }
  }, [starPrizeListData]);

  return (
    <div>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5">得獎好書</Typography>
        </div>
        <div style={{ position: 'absolute', right: '10px', top: '30%' }}>
          <Typography variant="caption"> &gt;&gt;更多得獎好書</Typography>
        </div>
      </div>
      <ScrollableTabPanel data={starPrizeList}></ScrollableTabPanel>
    </div>
  );
};

export default PrizeList;