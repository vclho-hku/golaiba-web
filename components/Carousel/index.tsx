import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import SlickArrow from './SlickArrow';
import SlickSlide from './SlickSlide';

const Carousel: FunctionComponent<any> = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <SlickArrow />,
    prevArrow: <SlickArrow />,
  };
  return (
    <div style={{ margin: '0px' }}>
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