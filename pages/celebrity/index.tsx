import React, { useEffect, useContext } from 'react';
import SubNavBarContext from '../../src/Context/SubNavBarContext';
import Celebrity from '../../src/components/Celebrity';

export default function CelebrityPage() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(1);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <Celebrity></Celebrity>;
}
