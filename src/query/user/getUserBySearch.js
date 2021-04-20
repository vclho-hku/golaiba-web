import { gql } from '@apollo/client';

export default gql`
  query getUserBySearch($userId: ID!, $keywords: String!) {
    getUserBySearch(userId: $userId, keywords: $keywords) {
      _id
      uid
      name
      email
    }
  }
`;
