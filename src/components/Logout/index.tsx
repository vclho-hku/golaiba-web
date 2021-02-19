import React, { useContext } from 'react';
import { withFirebase } from '../../Firebase';
import MenuItem from '@material-ui/core/MenuItem';
import { UserDataContext } from '../../Session';
const LoginOutButton = ({ firebase }: { firebase: any }) => {
  const { userData, updateUserData } = useContext(UserDataContext);
  const logout = () => {
    firebase.doSignOut();
    updateUserData(null);
  };
  return <MenuItem onClick={logout}>登出</MenuItem>;
};

export default withFirebase(LoginOutButton);
