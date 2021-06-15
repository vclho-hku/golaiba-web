import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import Slider from 'react-slick';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slideContainer: {
      maxHeight: '400px',
      cursor: 'pointer',
    },
    slideImage: {
      maxHeight: '400px',
      objectFit: 'contain',
    },
    slideContainerMob: {
      maxHeight: '300px',
      cursor: 'pointer',
    },
    slideImageMob: {
      maxHeight: '300px',
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
    <div style={{ margin: '10px' }}>
      <Hidden smDown>
        <Slider {...settings}>
          <div className={classes.slideContainer}>
            <img className={classes.slideImage} src="./HP_Hero1_Dsk.jpg"></img>
          </div>
          <div className={classes.slideContainer}>
            <Link href={`/celebrity`}>
              <img className={classes.slideImage} src="./CB_Hero_Dsk.jpg"></img>
            </Link>
          </div>
          <div className={classes.slideContainer}>
            <img
              className={classes.slideImage}
              src="./Place_Hero_Dsk.jpg"
            ></img>
          </div>
        </Slider>
      </Hidden>
      <Hidden mdUp>
        <Slider {...settings}>
          <div className={classes.slideContainerMob}>
            <img
              className={classes.slideImageMob}
              src="./HP_Hero1_Mob.jpg"
            ></img>
          </div>
          <div className={classes.slideContainerMob}>
            <Link href={`/celebrity`}>
              <img
                className={classes.slideImageMob}
                src="./CB_Hero_Mob.jpg"
              ></img>
            </Link>
          </div>
          <div className={classes.slideContainerMob}>
            <Link href={`/good-place`}>
              <img
                className={classes.slideImageMob}
                src="./Place_Hero_Mob.jpg"
              ></img>
            </Link>
          </div>
        </Slider>
      </Hidden>
    </div>
  );
};

export default HeaderBanner;
