import { gql } from '@apollo/client';

export default gql`
  mutation removeWishList($uid: String!, $bookId: String!) {
    removeWishList(uid: $uid, bookId: $bookId) {
      uid
    }
  }
`;
