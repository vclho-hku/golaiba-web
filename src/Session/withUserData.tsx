import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from 'react';

import { useLazyQuery } from '@apollo/client';
import { AuthUserContext, UserDataContext } from './context';
import withAuthentication from './withAuthentication';
import { GET_USER } from '../query/user';
import { database } from 'firebase';

const withUserData = (Component: any) => {
  const WithUserData: FunctionComponent = (props: any) => {
    const authUser: any = useContext(AuthUserContext);
    // const [getUser, { loading, data }] = useLazyQuery(GET_USER);
    // const [userData, setUserData] = useState(null);
    // useEffect(() => {
    //   if (authUser) {
    //     console.log('get authUser');
    //     getUser({
    //       variables: { uid: authUser.uid },
    //     });
    //     // setUserData('test');
    //   } else {
    //     console.log('dont have auth user');
    //   }
    // }, [data]);

    return (
      <UserDataContext.Provider value={'test'}>
        <Component {...props} />
      </UserDataContext.Provider>
    );
  };
  return withAuthentication(WithUserData);
};
export default withUserData;
