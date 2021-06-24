import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import SlickSlide from './SlickSlide';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import classes from '*.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 999,
      '&:before': {
        color: theme.palette.primary.main,
        fontSize: '40px',
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

const Carousel: FunctionComponent<any> = (props: any) => {
  const booklist = props.data;
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  function isInUserWishList(id: any) {
    let inTheList = false;
    props.userWishList.forEach((element: any) => {
      if (element.id == id) {
        inTheList = true;
      }
    });
    return inTheList;
  }
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {booklist.map((value: any, index: any) => {
          return (
            <SlickSlide
              key={index}
              data={value}
              isInUserWishList={isInUserWishList(value.id)}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
