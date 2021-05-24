import { gql } from '@apollo/client';

export default gql`
  query starCelebrityList {
    starCelebrityList {
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
