  
import React, { FunctionComponent } from 'react';
import Carousel from './Carousel';

const CarouselSection: FunctionComponent<any> = (props) => {
  const data = [
    {
      title: 'abc',
      author: '123',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/JG1YDwAAQBAJ?fife=w400-h600',
    },
    {
      title: 'abc',
      author: '123',
      bookCoverImg:
        'https://books.google.com/books/content/images/frontcover/-4j8CwAAQBAJ?fife=w400-h600',
    },
  ];
  return (
    <section style={{ margin: '30px' }}>
      {props.title}
      <Carousel data={data}>123</Carousel>
    </section>
  );
};

export default CarouselSection;