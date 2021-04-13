import { gql } from '@apollo/client';

export default gql`
  query getUserBookDetails($userBookId: ID!) {
    getUserBookDetails(userBookId: $userBookId) {
      id
      readingStatus
      book {
        id
        title
        imageUrl {
          small
          medium
        }
      }
    }
  }
`;
