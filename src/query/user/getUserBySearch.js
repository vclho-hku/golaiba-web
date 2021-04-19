import { gql } from '@apollo/client';

export default gql`
  query getUserBySearch($keywords: String!) {
    getUserBySearch(keywords: $keywords) {
      _id
      uid
      name
      email
    }
  }
`;
