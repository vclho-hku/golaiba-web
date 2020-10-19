import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
// import SlickPrevArrow from './SlickNextArrow';
// import SlickNextArrow from './SlickNextArrow';
import SlickSlide from './SlickSlide';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 999,
      '&:before': {
        color: theme.palette.primary.main,
        fontSize: '50px',
        backgroundColor: 'white',
        borderRadius: '30px',
        paddingTop: '6px',
        paddingLeft: '2px',
        paddingRight: '2px',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
      }
    }
  }),
);

function SlickPrevArrow(props: any) {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.root)}
      style={{ ...style, display: "block", left: "-5px"}}
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
      style={{ ...style, display: "block", right: "15px" }}
      onClick={onClick}
    />
  );
}

const Carousel: FunctionComponent<any> = (props: any) => {
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
  };
  return (
    <div style={{ margin: '20px' }}>
      <Slider {...settings}>
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
        <SlickSlide />
      </Slider>
    </div>
  );
};

export default Carousel;