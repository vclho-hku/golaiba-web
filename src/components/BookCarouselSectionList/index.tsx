import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import BookCarouselSection from '../BookCarouselSection';
import { UserDataContext } from '../../Session';

const BookCarouselSectionList: FunctionComponent<any> = () => {
  const { userData, updateUserData } = useContext(UserDataContext);
  const [userWishlist, setUserWishlist] = useState([]);

  useEffect(() => {
    if (userData && userData.wishlist) {
      setUserWishlist(userData.wishlist);
    } else {
      setUserWishlist([]);
    }
  }, [userData]);
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
