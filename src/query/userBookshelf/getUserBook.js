import { gql } from '@apollo/client';

export default gql`
  query getUserBook($userId: ID!, $bookId: ID!) {
    getUserBook(userId: $userId, bookId: $bookId) {
      id
    }
  }
`;
