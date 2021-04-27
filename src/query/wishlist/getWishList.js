import { gql } from '@apollo/client';

export default gql`
  query getWishList($id: String!) {
    getWishlist(id: $id) {
      id
      isbn
      title
      subtitle
      description
      language
      rating
      ratingCount
      pageCount
      publishDate
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
