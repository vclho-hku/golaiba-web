import { gql } from '@apollo/client';

export default gql`
  query getBookBySearch($keywords: String!) {
    getBookBySearch(keywords: $keywords) {
      _id
      isbn
      title
      subtitle
      description
      language
      pageCount
      imageUrl {
        small
        medium
        large
      }
      authors {
        name {
          zh_hk
          en_us
        }
      }
      publisher {
        name {
          zh_hk
          en_us
        }
      }
    }
  }
`;