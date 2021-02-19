import React, { useContext, useEffect, useState } from 'react';
import BookCarouselSectionList from '../src/components/BookCarouselSectionList';
import { UserDataContext } from '../src/Session';

export default function Index() {
  return <BookCarouselSectionList></BookCarouselSectionList>;
}
