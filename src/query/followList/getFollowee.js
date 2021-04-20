import { gql } from '@apollo/client';

export default gql`
  query getFollowee($userId: ID!) {
    getFollowee(userId: $userId) {
      email
      name
    }
  }
`;
