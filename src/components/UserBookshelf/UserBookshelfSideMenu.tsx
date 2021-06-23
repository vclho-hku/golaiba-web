import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '150px',
      marginLeft: '20px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#bfae5e',
      marginBottom: '10px',
    },
    acordionDetailsRoot: {
      width: '100%',
    },
    acordionDetailsContainter: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
  }),
);

const UserBookshelfSideMenu = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>我的書本 (100)</div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ fontWeight: 'bold' }}>閱讀狀態</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.acordionDetailsRoot}>
            <div className={classes.acordionDetailsContainter}>
              <div>全部</div>
              <div>
                <Chip label="100" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>想讀</div>
              <div>
                <Chip label="20" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>正在讀</div>
              <div>
                <Chip label="10" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>未讀</div>
              <div>
                <Chip label="70" size="small" />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ fontWeight: 'bold' }}>分類</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.acordionDetailsRoot}>
            <div className={classes.acordionDetailsContainter}>
              <div>心理學</div>
              <div>
                <Chip label="3" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>科普</div>
              <div>
                <Chip label="12" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>小說</div>
              <div>
                <Chip label="20" size="small" />
              </div>
            </div>
            <div className={classes.acordionDetailsContainter}>
              <div>語言學習</div>
              <div>
                <Chip label="5" size="small" />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserBookshelfSideMenu;
