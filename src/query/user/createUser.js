import { gql } from '@apollo/client';

export default gql`
  mutation createUser($uid: String!, $name: String!, $email: String!) {
    createUser(data: { uid: $uid, name: $name, email: $email }) {
      id
      uid
      name
      email
      avatarImgUrl
      wishlist {
        id
      }
    }
  }
`;
