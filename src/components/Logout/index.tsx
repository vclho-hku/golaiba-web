import React from 'react';
import { withFirebase } from '../../Firebase';
import MenuItem from '@material-ui/core/MenuItem';
const LoginOutButton = ({ firebase }: { firebase: any }) => (
  <MenuItem onClick={firebase.doSignOut}>登出</MenuItem>
);
export default withFirebase(LoginOutButton);
