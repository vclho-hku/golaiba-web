import React from 'react';
import BookCarouselSection from '../src/components/BookCarouselSection';

export default function Index() {
  return (
    <div>
      <BookCarouselSection
        title={'熱門暢銷書'}
        sectionKey={'newPublished'}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'心靈勵智'}
        sectionKey={'inspirational'}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'文學歷史'}
        sectionKey={'newPublished'}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'親子專區'}
        sectionKey={'inspirational'}
      ></BookCarouselSection>
    </div>
  );
}
