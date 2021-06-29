import React, { useState, useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BookRecommandationList from './BookRecommandationList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      justifyContent: 'space-between',
    },
  }),
);

const BookRecommandationContainer = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <div style={{ marginLeft: '15px', marginTop: '20px' }}>
        <Typography variant="h6" component="h6">
          你可能有興趣的書本
        </Typography>
      </div>
      <div>
        <BookRecommandationList></BookRecommandationList>
      </div>
    </div>
  );
};

export default BookRecommandationContainer;
