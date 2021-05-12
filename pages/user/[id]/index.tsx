import React from 'react';
import { useRouter } from 'next/router';
import VisitAccount from '../../../src/components/VisitAccount';
export default function VisitAccountPage() {
  const router = useRouter();
  const { id } = router.query;
  return <VisitAccount userId={id}></VisitAccount>;
}
