import React from 'react';
import { useRouter } from 'next/router';
import VisitMyFollowee from '../../../../../src/components/VisitMyFollowee';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <VisitMyFollowee userId={id}></VisitMyFollowee>;
}
