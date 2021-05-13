import React from 'react';
import { useRouter } from 'next/router';
import VisitMyFollower from '../../../../../src/components/VisitMyFollower';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <VisitMyFollower userId={id}></VisitMyFollower>;
}
