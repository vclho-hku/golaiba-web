import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import Button from '@material-ui/core/Button';

const BookDetailsDescription = (props: any) => {
  const [expand, setExpand] = useState(false);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        maxHeight: expand ? 'none' : '200px',
        overflow: 'hidden',
        position: 'relative',
      },
      blurFrame: {
        display: expand ? 'none' : 'block',
        bottom: 0,
        height: '15px',
        position: 'absolute',
        width: '100%',
        background: 'linear-gradient(to bottom,rgba(255,255,255,0),white)',
      },
    }),
  );

  const classes = useStyles();
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <div className={classes.container}>
        {ReactHtmlParser(props.description)}
        <div className={classes.blurFrame}></div>
      </div>
      <div>
        <Button color="secondary" onClick={handleExpand}>
          {expand ? '收起來' : '閱讀更多'}
        </Button>
      </div>
    </div>
  );
};

export default BookDetailsDescription;
