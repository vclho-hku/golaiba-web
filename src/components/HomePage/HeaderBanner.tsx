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
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 999,
      '&:before': {
        color: theme.palette.primary.main,
        fontSize: '0px',
        backgroundColor: 'white',
        borderRadius: '25px',
        paddingTop: '5px',
        paddingLeft: '2px',
        paddingRight: '2px',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
      },
      [theme.breakpoints.down('sm')]: {
        '&:before': {
          fontSize: '30px',
          borderRadius: '35px',
          paddingTop: '3px',
          paddingLeft: '1px',
          paddingRight: '1px',
        },
      },
    },
    slideContainer: {
      maxHeight: '400px',
      cursor: 'pointer',
      marginLeft: '40px',
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
      marginLeft: '20px',
    },
    container: {
      margin: '10px',
      [theme.breakpoints.down('sm')]: {
        margin: '5px',
      },
    },
  }),
);

function SlickPrevArrow(props: any) {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.root)}
      style={{ ...style, display: 'block', left: '-5px' }}
      onClick={onClick}
    />
  );
}

function SlickNextArrow(props: any) {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.root)}
      style={{ ...style, display: 'block', right: '15px' }}
      onClick={onClick}
    />
  );
}

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
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <div className={classes.container}>
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
            <Link href={`/classic`}>
              <img className={classes.slideImage} src="./classic.png"></img>
            </Link>
          </div>
          <div className={classes.slideContainer}>
            <Link href={`/good-place`}>
              <img
                className={classes.slideImage}
                src="./Place_Hero_Dsk.jpg"
              ></img>
            </Link>
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
            <Link href={`/classic`}>
              <img
                className={classes.slideImageMob}
                src="./classic_mob.jpg"
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
