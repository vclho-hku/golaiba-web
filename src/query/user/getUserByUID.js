import { gql } from '@apollo/client';

export default gql`
  query userByUID($uid: String!) {
    getUserByUID(uid: $uid) {
      uid
      name
      email
    }
  }
`;
