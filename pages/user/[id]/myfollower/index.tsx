import React from 'react';
import { useRouter } from 'next/router';
import MyFollower from '../../../../src/components/FollowerList/MyFollower';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <MyFollower userId={id}></MyFollower>;
}
