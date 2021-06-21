import React, { useState, useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import StarIcon from '@material-ui/icons/Star';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faHiking } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

library.add(
  faHeart,
  faSkullCrossbones,
  faUserAstronaut,
  faHiking,
  faBalanceScaleLeft,
  faCocktail,
  faHandHoldingHeart,
  faLightbulb,
  faHistory,
  faArrowRight,
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: 'relative',
      padding: '20px',
      marginTop: '40px',
      marginDown: '10px',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    card: {
      width: '120px',
      height: '80px',
      marginRight: '10px',
      marginTop: '10px',
      [theme.breakpoints.up('sm')]: {
        width: '150px',
        height: '100px',
        marginRight: '20px',
        marginTop: '20px',
      },
    },
    cardContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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

const CategoryList = (props: any) => {
  const classes = useStyles();
  const categoryList = [
    ['愛情小說', 'heart'],
    ['犯罪驚慄', 'skull-crossbones'],
    ['超自然', 'user-astronaut'],
    ['心理學', 'hand-holding-heart'],
    ['名人傳記', 'lightbulb'],
    ['歷史及考古', 'history'],
    ['旅遊', 'hiking'],
    ['政治及社會', 'balance-scale-left'],
    ['飲食及烹飪', 'cocktail'],
    ['更多分類', 'arrow-right'],
  ];
  const settings = {
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 1,
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
    <div>
      <div className={classes.title}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4">分類搜尋</Typography>
        </div>
        <div>
          <Slider {...settings}>
            {categoryList.map((value: any, index) => (
              <div key={index}>
                <Card className={classes.card} elevation={3}>
                  <div className={classes.cardContainer}>
                    <div>
                      <FontAwesomeIcon icon={['fas', value[1]]} size="lg" />
                    </div>
                    <div>
                      <Typography variant="h6">{value[0]}</Typography>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
