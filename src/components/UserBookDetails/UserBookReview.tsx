import React, { useEffect, useContext } from 'react';
import UserBookReviewForm from './UserBookReviewForm';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BOOK_REVIEW } from '../../query/userBookshelf';
import { UserDataContext } from '../../Session';

const UserBookReview = (props: any) => {
  const { userData } = useContext(UserDataContext);
  const [getUserBookReview, { data: userBookReviewData }] = useLazyQuery(
    GET_USER_BOOK_REVIEW,
    {
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (userData) {
      getUserBookReview({
        variables: { userId: userData.id, bookId: props.bookId },
      });
    }
  }, [userData]);

  return (
    <UserBookReviewForm
      bookId={props.bookId}
      userId={userData.id}
      userName={userData.name}
    ></UserBookReviewForm>
  );
};

export default UserBookReview;
