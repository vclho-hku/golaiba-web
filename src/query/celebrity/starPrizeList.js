import { gql } from '@apollo/client';

export default gql`
  query starPrizeList {
    starPrizeList {
      name {
        zh_hk
      }
      recommendBooks {
        isKeyRecommend
        book {
          title
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
        }
      }
    }
  }
`;
