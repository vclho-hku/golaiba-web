import React from 'react';

type ContextProps = any;

const AuthUserContext = React.createContext(null);
const UserDataContext = React.createContext<ContextProps>(null);

export { AuthUserContext, UserDataContext };
