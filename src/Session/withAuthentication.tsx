import React, { FunctionComponent, useState, useEffect } from 'react';

import { AuthUserContext, UserDataContext } from './context';
import { withFirebase } from '../Firebase';
import { SignalCellularNoSimOutlined } from '@material-ui/icons';

const withAuthentication = (Component: any) => {
  const WithAuthentication: FunctionComponent = (props: any) => {
    const [authUser, setAuthUser] = useState(null);
    let initUserData = null;
    if (typeof window !== 'undefined') {
      initUserData = JSON.parse(localStorage.getItem('userData'));
    }
    const [userData, setUserData] = useState(initUserData);

    const listener = props.firebase.auth.onAuthStateChanged(
      (firebaseUser: any) => {
        if (firebaseUser) {
          setAuthUser(firebaseUser);
        } else {
          setAuthUser(null);
        }
      },
    );
    const updateUserData = (data) => {
      setUserData(data);
      if (typeof window !== 'undefined') {
        let updateUserData = data;
        if (data != null) {
          updateUserData = JSON.stringify(updateUserData);
        }
        localStorage.setItem('userData', updateUserData);
      }
    };
    useEffect(() => {
      return () => {
        listener();
      };
    });

    return (
      <AuthUserContext.Provider value={authUser}>
        <UserDataContext.Provider value={{ userData, updateUserData }}>
          <Component {...props} />
        </UserDataContext.Provider>
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(WithAuthentication);
};
export default withAuthentication;
