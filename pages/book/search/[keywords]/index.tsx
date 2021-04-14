import React from 'react';
import { useRouter } from 'next/router';
export default function BookSearchPage() {
  const router = useRouter();
  const { keywords } = router.query;
  return <div>book search test</div>;
}
