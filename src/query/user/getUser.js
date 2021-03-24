import { gql } from '@apollo/client';

export default gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      uid
      name
      email
    }
  }
`;
