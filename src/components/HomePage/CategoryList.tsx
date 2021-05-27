import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import StarIcon from '@material-ui/icons/Star';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: 'relative',
      padding: '20px',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    card: {
      width: '150px',
      height: '100px',
      marginRight: '20px',
      marginTop: '20px',
    },
    cardContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
);

const CategoryList = (props: any) => {
  const classes = useStyles();
  const categoryList = [
    '心理學',
    '犯罪及驚慄',
    '超自然',
    '旅遊',
    '政治及社會',
    '飲食及烹飪',
  ];

  return (
    <div>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4">分類搜尋</Typography>
        </div>
        <div className={classes.container}>
          {categoryList.map((value, index) => (
            <Card key={index} className={classes.card} elevation={3}>
              <div className={classes.cardContainer}>
                <div>
                  <StarIcon fontSize="large" />
                </div>
                <div>
                  <Typography variant="h6">{value}</Typography>
                </div>
              </div>
            </Card>
          ))}
          <Card className={classes.card} elevation={3}>
            <div className={classes.cardContainer}>
              <div>
                <ArrowRightAltIcon fontSize="large" />
              </div>
              <div>
                <Typography variant="h6">更多分類</Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;