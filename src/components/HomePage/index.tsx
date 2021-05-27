import React, { useState, useContext, useEffect } from 'react';
import HeaderBanner from './HeaderBanner';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BookCarouselSection from './BookCarouselSection';
import { UserDataContext } from '../../Session';
import { useLazyQuery } from '@apollo/client';
import { GET_WISH_LIST_ID } from '../../query/wishlist';
import CategoryList from './CategoryList';

const useStyles = makeStyles((theme: Theme) => ({}));

const HomePage = (props: any) => {
  const classes = useStyles();
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
      <HeaderBanner></HeaderBanner>
      <CategoryList></CategoryList>
      <BookCarouselSection
        title={'最新上架'}
        sectionKey={'newPublished'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
      <BookCarouselSection
        title={'最多Like'}
        sectionKey={'inspirational'}
        userWishlist={userWishlist}
      ></BookCarouselSection>
    </div>
  );
};

export default HomePage;
