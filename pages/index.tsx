import React, { useEffect, useContext } from 'react';
import HomePage from '../src/components/HomePage';
import SubNavBarContext from '../src/Context/SubNavBarContext';

export default function Index() {
  const { setSubNavBarValue } = useContext(SubNavBarContext);
  useEffect(() => {
    setSubNavBarValue(0);
    return () => {
      setSubNavBarValue(-1);
    };
  });
  return <HomePage></HomePage>;
}
