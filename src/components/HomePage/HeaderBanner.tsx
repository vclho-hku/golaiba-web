import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import Slider from 'react-slick';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slideContainer: {
      maxHeight: '400px',
    },
    slideImage: {
      maxHeight: '400px',
      objectFit: 'contain',
    },
  }),
);

const HeaderBanner = (props: any) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
  };

  return (
    <div style={{ margin: '20px' }}>
      <Slider {...settings}>
        <div className={classes.slideContainer}>
          <img className={classes.slideImage} src="./HP_Hero1_Dsk.jpg"></img>
        </div>
        <div className={classes.slideContainer}>
          <img className={classes.slideImage} src="./CB_Hero_Dsk.jpg"></img>
        </div>
        <div className={classes.slideContainer}>
          <img className={classes.slideImage} src="./Place_Hero_Dsk.jpg"></img>
        </div>
      </Slider>
    </div>
  );
};

export default HeaderBanner;
