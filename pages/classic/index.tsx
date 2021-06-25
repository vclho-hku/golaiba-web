import React, { useEffect, useContext } from 'react';
import SubNavBarContext from '../../src/Context/SubNavBarContext';
import Classic from '../../src/components/Classic';

export default function ClassicPage() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(2);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <Classic></Classic>;
}
