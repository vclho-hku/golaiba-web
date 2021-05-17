import { gql } from '@apollo/client';

export default gql`
  query getUserTags($userId: ID!) {
    getUserTags(userId: $userId)
  }
`;
