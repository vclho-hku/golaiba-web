import React from 'react';
import { useRouter } from 'next/router';
import UserBookshelf from '../../../../src/components/UserBookshelf';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <UserBookshelf userId={id}></UserBookshelf>;
}
