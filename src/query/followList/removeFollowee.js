import { gql } from '@apollo/client';

export default gql`
  mutation removeFollowee($userId: ID!, $followeeId: ID!) {
    removeFollowee(userId: $userId, followeeId: $followeeId) {
      id
    }
  }
`;
