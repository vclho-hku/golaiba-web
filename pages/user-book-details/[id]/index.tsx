import React from 'react';
import { useRouter } from 'next/router';
import UserBookDetails from '../../../src/components/UserBookDetails';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <UserBookDetails userBookId={id}></UserBookDetails>;
}
