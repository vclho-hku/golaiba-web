import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import BookCarouselSection from '../BookCarouselSection';
import { UserDataContext } from '../../Session';
import { useLazyQuery } from '@apollo/client';
import { GET_WISH_LIST_ID } from '../../query/wishlist';

const BookCarouselSectionList: FunctionComponent<any> = () => {
  const { userData } = useContext(UserDataContext);
  const [userWishlist, setUserWishlist] = useState([]);
  const [getWishlistId, { data }] = useLazyQuery(GET_WISH_LIST_ID, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (userData && userData.wishlist) {
      getWishlistId({ variables: { id: userData.id } });
    } else {
      setUserWishlist([]);
    }
  }, [userData]);
  useEffect(() => {
    if (data) {
      setUserWishlist(data.getWishlist);
    }
  }, [data]);
  return (
    <div>
      <BookCarouselSection
        title={'最新上架'}
        sectionKey={'newPublished'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'心靈勵智'}
        sectionKey={'inspirational'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'文學歷史'}
        sectionKey={'newPublished'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'親子專區'}
        sectionKey={'inspirational'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
    </div>
  );
};
export default BookCarouselSectionList;
