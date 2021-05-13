import React from 'react';
import { useRouter } from 'next/router';
import VisitBookshelf from '../../../../../src/components/VisitBookshelf';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <VisitBookshelf userId={id}></VisitBookshelf>;
}
