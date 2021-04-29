import { gql } from '@apollo/client';

export default gql`
  query getUserBookDetails($userBookId: ID!) {
    getUserBookDetails(userBookId: $userBookId) {
      id
      readingStatus
      book {
        id
        authors {
          name {
            zh_hk
            en_us
          }
        }
        imageUrl {
          small
          medium
        }
        publishDate
        publisher {
          name {
            zh_hk
            en_us
          }
        }
      }
    }
  }
`;
