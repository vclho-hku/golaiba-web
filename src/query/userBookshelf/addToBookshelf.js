import { gql } from '@apollo/client';

export default gql`
  mutation addToBookshelf($userId: ID!, $bookId: ID!) {
    addToBookshelf(userId: $userId, bookId: $bookId) {
      id
    }
  }
`;
