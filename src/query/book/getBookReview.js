import { gql } from '@apollo/client';

export default gql`
  query getBookReview($bookId: ID!, $limit: Int, $offset: Int) {
    getBookReview(bookId: $bookId, limit: $limit, offset: $offset) {
      userName
      rating
      review
    }
  }
`;
