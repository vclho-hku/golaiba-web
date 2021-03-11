import React from 'react';
import { useRouter } from 'next/router';
import WishList from '../../../../src/components/WishList';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <WishList userId={id}></WishList>;
}
