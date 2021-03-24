import React from 'react';
import { useRouter } from 'next/router';
import MyAccount from '../../../../src/components/MyAccount';

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return <MyAccount userId={id}></MyAccount>;
}
