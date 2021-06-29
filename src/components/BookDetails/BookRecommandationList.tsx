import React, { useState, useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Slider from 'react-slick';
import RecommandationSlickSlide from './RecommandationSlickSlide';
import RecommandationTestData from './RecommandationTestData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      justifyContent: 'space-between',
    },
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

const BookRecommandationList = (props: any) => {
  const booklist = RecommandationTestData;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div style={{ margin: '10px' }}>
      <Slider {...settings}>
        {booklist.map((value: any, index: any) => {
          return <RecommandationSlickSlide key={index} data={value} />;
        })}
      </Slider>
    </div>
  );
};

export default BookRecommandationList;
