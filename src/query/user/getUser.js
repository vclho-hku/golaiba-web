import { gql } from '@apollo/client';

export default gql`
  query getUser($uid: String!) {
    userByUID(uid: $uid) {
      id
      uid
      name
      email
      wishlist {
        id
      }
    }
  }
`;
