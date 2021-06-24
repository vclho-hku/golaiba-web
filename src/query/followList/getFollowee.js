import { gql } from '@apollo/client';

export default gql`
  query getFollowee($userId: ID!) {
    getFollowee(userId: $userId) {
      id
      email
      name
      avatarImgUrl {
        small
        medium
        large
      }
    }
  }
`;
