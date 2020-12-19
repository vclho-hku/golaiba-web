import React from 'react';
import BookCarouselSection from '../src/components/BookCarouselSection';

export default function Index() {
  return (
    <div>
      <BookCarouselSection title={'熱門暢銷書'}></BookCarouselSection>
      <BookCarouselSection title={'心靈勵智'}></BookCarouselSection>
      <BookCarouselSection title={'文學歷史'}></BookCarouselSection>
      <BookCarouselSection title={'親子專區'}></BookCarouselSection>
    </div>
  );
}
