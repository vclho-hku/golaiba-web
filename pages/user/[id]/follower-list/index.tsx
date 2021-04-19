import React from 'react';
import { useRouter } from 'next/router';
import FollowerList from '../../../../src/components/FollowerList';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <FollowerList userId={id}>follower list</FollowerList>;
}
