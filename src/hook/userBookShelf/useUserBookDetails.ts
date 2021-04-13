import { useQuery } from '@apollo/client';
import { GET_USER_BOOK_DETAILS } from '../../query/userBookshelf';

function userUserBookDetails(userBookId: any) {
  const { loading, error, data: userBook } = useQuery(GET_USER_BOOK_DETAILS, {
    variables: { userBookId: userBookId },
    fetchPolicy: 'network-only',
  });

  return userBook;
}