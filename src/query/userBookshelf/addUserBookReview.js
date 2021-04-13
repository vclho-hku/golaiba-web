import { gql } from '@apollo/client';

export default gql`
  mutation addUserBookReview($userId: ID!, $bookId: ID!, $userName: String) {
    addUserBookReview(userId: $userId, bookId: $bookId, userName: $userName) {
      id
    }
  }
`;
