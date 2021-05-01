import { gql } from '@apollo/client';

export default gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      uid
      name
      email
      followerCount
      followeeCount
      bookCount
      avatarImgUrl {
        small
        medium
        large
      }
      isSentNewsletter
      language
      region
      birthDate
      gender
      createdAt
    }
  }
`;
