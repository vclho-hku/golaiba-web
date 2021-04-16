import { gql } from '@apollo/client';

export default gql`
  query getBookBySearch($keyword: String!) {
    getBookReview(keyword: $keyword) {
      title
    }
  }
`;
