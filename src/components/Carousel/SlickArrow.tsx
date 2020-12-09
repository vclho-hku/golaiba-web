import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
      backgroundColor: 'white',
      border: `0.1.8rem solid lightgray`,
      height: '12%',
      padding: '1.1rem',
      width: 'min-content',
      zIndex: 999,
      borderRadius: '2rem',
      boxShadow: '0px 0px 3px 3px lightgray',
    },
  }),
);

const SlickArrow: FunctionComponent = (props: any) => {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.root)}
      style={{ ...style }}
      onClick={onClick}
      onKeyDown={onClick}
    ></div>
  );
};

export default SlickArrow;
