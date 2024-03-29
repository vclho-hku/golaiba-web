import React from 'react';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';

const withAuthorization = (condition: any) => (Component: any) => {
  class WithAuthorization extends React.Component<any, any> {
    listener: any = null;
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser: any) => {
          if (!condition(authUser)) {
            // this.props.history.push(ROUTES.SIGN_IN);
          }
        },
      );
    }
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return withFirebase(WithAuthorization);
};
export default withAuthorization;
