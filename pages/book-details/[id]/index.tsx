import React from 'react';
import { useRouter } from 'next/router';
import BookDetails from '../../../src/components/BookDetails';
export default function Login() {
  const router = useRouter();
  const { id } = router.query;
  return <BookDetails id={id}></BookDetails>;
}
