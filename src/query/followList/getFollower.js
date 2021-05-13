import { gql } from '@apollo/client';

export default gql`
  query getFollower($userId: ID!) {
    getFollower(userId: $userId) {
      id
      email
      name
    }
  }
`;
