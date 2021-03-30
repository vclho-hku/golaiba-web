import { gql } from '@apollo/client';

export default gql`
  query getUserBookshelf($userId: ID!) {
    getUserBook(userId: $userId) {
      id
    }
  }
`;
