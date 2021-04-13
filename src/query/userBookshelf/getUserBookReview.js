import { gql } from '@apollo/client';

export default gql`
  query getUserBookReview($userId: ID!, $bookId: ID!) {
    getUserBookReview(userId: $userId, bookId: $bookId) {
      userName
      rating
      review
    }
  }
`;
