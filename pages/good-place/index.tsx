import React, { useContext, useEffect } from 'react';
import SubNavBarContext from '../../src/Context/SubNavBarContext';
import GoodPlace from '../../src/components/GoodPlace';
export default function GoodPlacePage() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(3);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <GoodPlace></GoodPlace>;
}
