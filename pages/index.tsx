import React from 'react';
import CarouselSection from '../src/components/CarouselSection';

export default function Index() {
  return (
    <div>
      <CarouselSection title={'熱門暢銷書'}></CarouselSection>
      <CarouselSection title={'心靈勵智'}></CarouselSection>
      <CarouselSection title={'文學歷史'}></CarouselSection>
      <CarouselSection title={'親子專區'}></CarouselSection>
    </div>
  );
}
