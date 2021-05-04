import React, { useEffect, useContext } from 'react';
import BookCarouselSectionList from '../src/components/BookCarouselSectionList';
import SubNavBarContext from '../src/Context/SubNavBarContext';

export default function Index() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(0);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <BookCarouselSectionList></BookCarouselSectionList>;
}
