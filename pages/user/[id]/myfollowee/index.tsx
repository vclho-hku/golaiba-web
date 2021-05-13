import React from 'react';
import { useRouter } from 'next/router';
import MyFollowee from '../../../../src/components/FollowerList/MyFollowee';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <MyFollowee userId={id}></MyFollowee>;
}
