import React, { FunctionComponent, useState, useEffect } from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component: any) => {
  const WithAuthentication: FunctionComponent = (props: any) => {
    const [authUser, setAuthUser] = useState(null);
    const listener = props.firebase.auth.onAuthStateChanged(
      (firebaseUser: any) => {
        if (firebaseUser) {
          setAuthUser(firebaseUser);
        } else {
          setAuthUser(null);
        }
      },
    );
    useEffect(() => {
      return () => {
        listener();
      };
    });

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(WithAuthentication);
};
export default withAuthentication;
