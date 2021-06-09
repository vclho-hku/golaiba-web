import React, { useState } from 'react';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const MapPointer = (props: any) => {
  const [showInfo, setShowInfo] = useState(false);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      pointerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      info: {
        display: showInfo ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 16,
        top: '-40px',
        zIndex: 2,
      },
      pointer: {
        cursor: 'pointer',
        position: 'absolute',
        top: '-15px',
        zIndex: 1,
      },
    }),
  );

  const classes = useStyles();

  const handlePointerClick = () => {
    setShowInfo(true);
  };

  return (
    <div className={classes.pointerContainer}>
      {/* <div className={classes.info}>{props.name}</div> */}
      <div className={classes.pointer}>
        <RoomRoundedIcon
          style={{ color: red[600], fontSize: 36 }}
          onClick={handlePointerClick}
        />
      </div>
    </div>
  );
};

export default MapPointer;
