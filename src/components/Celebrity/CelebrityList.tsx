import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollableTabPanel from './ScrollableTabPanel';
import { STAR_CELEBRITY_LIST } from '../../query/celebrity';
import { useLazyQuery } from '@apollo/client';
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
  const [starCelebrityList, setStarCelebrityList] = useState([]);
  const [getStarCelebrityList, { data: starCelebrityListData }] = useLazyQuery(
    STAR_CELEBRITY_LIST,
    {
      fetchPolicy: 'network-only',
    },
  );
  useEffect(() => {
    getStarCelebrityList();
  }, []);
  useEffect(() => {
    if (starCelebrityListData) {
      setStarCelebrityList(starCelebrityListData.starCelebrityList);
    }
  }, [starCelebrityListData]);

  return (
    <div style={{ marginTop: '20px' }}>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5">名人推介</Typography>
        </div>
        <div style={{ position: 'absolute', right: '10px', top: '30%' }}>
          <Typography variant="caption"> &gt;&gt;更多名人推介</Typography>
        </div>
      </div>
      <ScrollableTabPanel data={starCelebrityList}></ScrollableTabPanel>
    </div>
  );
};

export default CelebrityList;
