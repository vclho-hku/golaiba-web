import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
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
    ></div>
  );
};

export default SlickArrow;