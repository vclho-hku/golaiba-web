import { gql } from '@apollo/client';

export default gql`
  mutation addFollowee($userId: ID!, $followeeId: ID!) {
    addFollowee(userId: $userId, followeeId: $followeeId) {
      id
    }
  }
`;
