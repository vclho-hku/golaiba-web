import { gql } from '@apollo/client';

export default gql`
  mutation updateUserBookReadingStatus(
    $userId: ID!
    $bookId: ID!
    $readingStatus: String
  ) {
    updateUserBookReadingStatus(
      userId: $userId
      bookId: $bookId
      readingStatus: $readingStatus
    ) {
      id
    }
  }
`;
