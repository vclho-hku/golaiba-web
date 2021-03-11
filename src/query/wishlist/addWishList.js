import { gql } from '@apollo/client';

export default gql`
  mutation addWishList($uid: String!, $bookId: String!) {
    addWishList(uid: $uid, bookId: $bookId) {
      uid
    }
  }
`;
