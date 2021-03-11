import { gql } from '@apollo/client';

export default gql`
  query getWishList($id: String!) {
    getWishlist(id: $id) {
      id
    }
  }
`;
