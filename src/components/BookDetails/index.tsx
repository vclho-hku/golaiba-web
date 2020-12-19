import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const BookDetails: FunctionComponent<any> = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={'auto'}>
          Book Details {props.id}
        </Grid>
        <Grid item xs={12} sm={9}>
          Book information
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
