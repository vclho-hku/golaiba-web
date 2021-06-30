import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import BookSlide from './BookSlide';
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

const BookCarousel = (props: any) => {
  const booklist = props.data;
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
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ margin: '20px' }}>
      <Slider {...settings}>
        {booklist.map((data: any, index: any) => {
          return <BookSlide key={index} data={data.book} />;
        })}
      </Slider>
    </div>
  );
};

export default BookCarousel;
