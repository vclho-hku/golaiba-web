import React from 'react';
import { Typography } from '@material-ui/core';

const NoAccessRight = (props: any) => {
  return (
    <div>
      <Typography variant="h5" component="h5">
        You have no access right to view this page!
      </Typography>
    </div>
  );
};

export default NoAccessRight;
