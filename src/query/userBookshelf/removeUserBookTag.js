import { gql } from '@apollo/client';

export default gql`
  mutation removeUserBookTag($userId: ID!, $bookId: ID!, $tag: String) {
    removeUserBookTag(userId: $userId, bookId: $bookId, tag: $tag) {
      id
    }
  }
`;
