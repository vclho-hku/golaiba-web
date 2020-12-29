import React from 'react';
import { useRouter } from 'next/router';
import BookDetails from '../../../src/components/BookDetails';
export default function Login() {
  const router = useRouter();
  const { isbn } = router.query;
  return <BookDetails isbn={isbn}></BookDetails>;
}
