import { gql } from '@apollo/client';

export default gql`
  query getBookDetails($id: ID!) {
    book(id: $id) {
      id
      isbn
      title
      subtitle
      description
      language
      pageCount
      title
      rating
      ratingCount
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
      publishDate
      publisher {
        name {
          zh_hk
          en_us
        }
      }
      tags
    }
  }
`;
