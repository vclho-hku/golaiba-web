import { gql } from '@apollo/client';

export default gql`
  query getUserBookshelf($userId: ID!) {
    getUserBookshelf(userId: $userId) {
      id
      readingStatus
      tags
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
