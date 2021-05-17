import { gql } from '@apollo/client';

export default gql`
  mutation addUserBookTag($userId: ID!, $bookId: ID!, $tag: String) {
    addUserBookTag(userId: $userId, bookId: $bookId, tag: $tag) {
      id
    }
  }
`;
