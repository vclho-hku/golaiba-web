import React, { useContext, useEffect } from 'react';
import SubNavBarContext from '../../src/Context/SubNavBarContext';
import Discuss from '../../src/components/Discuss';
export default function DiscussPage() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(4);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <Discuss></Discuss>;
}
