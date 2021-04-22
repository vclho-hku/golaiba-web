import { gql } from '@apollo/client';

export default gql`
  query getFolloweeActivity($userId: ID!) {
    getFolloweeActivity(userId: $userId) {
      updatedAt
      user {
        name
        email
      }
      activity
      data {
        book {
          id
          isbn
          title
          rating
          ratingCount
          imageUrl {
            small
            medium
          }
          authors {
            name {
              zh_hk
              en_us
            }
          }
        }
      }
    }
  }
`;
