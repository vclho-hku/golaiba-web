import React from 'react';
import { useRouter } from 'next/router';
import BookSearch from '../../../../src/components/BookSearch/';
export default function BookSearchPage() {
  const router = useRouter();
  const { keywords } = router.query;
  return <BookSearch keywords={keywords}></BookSearch>;
}
