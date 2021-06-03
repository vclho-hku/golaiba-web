import React, { useContext, useEffect } from 'react';
import SubNavBarContext from '../../../src/Context/SubNavBarContext';
import DiscussDetails from '../../../src/components/Discuss/DiscussDetails';
export default function DiscussPage() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(4);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <DiscussDetails></DiscussDetails>;
}
