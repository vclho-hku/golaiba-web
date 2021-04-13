import { gql } from '@apollo/client';

export default gql`
  mutation addUserBookReview(
    $userId: ID!
    $bookId: ID!
    $userName: String
    $rating: Float
    $review: String
  ) {
    addUserBookReview(
      userId: $userId
      bookId: $bookId
      userName: $userName
      rating: $rating
      review: $review
    ) {
      id
    }
  }
`;
