import { gql } from '@apollo/client';

export default gql`
  query BookPromotionList($key: String!) {
    bookPromotionList(key: $key) {
      key
      books {
        id
        isbn
        title
        imageUrl {
          small
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
`;
