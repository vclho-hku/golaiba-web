import { gql } from '@apollo/client';

export default gql`
  mutation removeFromBookshelf($userId: ID!, $bookId: ID!) {
    removeFromBookshelf(userId: $userId, bookId: $bookId) {
      id
    }
  }
`;
