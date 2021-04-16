import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_BOOK_DETAILS } from '../../query/book';
import BookDetailsContainer from './BookDetailsContainer';
import { UserDataContext } from '../../Session';
import { useLazyQuery } from '@apollo/client';
import { GET_WISH_LIST_ID } from '../../query/wishlist';
import { GET_USER_BOOK } from '../../query/userBookshelf';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const BookDetails: FunctionComponent<any> = (props: any) => {
  const classes = useStyles();
  const [isInWishlist, setInWishlist] = useState(false);
  const [isInBookshelf, setInBookshelf] = useState(false);
  const { userData } = useContext(UserDataContext);

  const [getWishlistId, { data: wishlistid }] = useLazyQuery(GET_WISH_LIST_ID, {
    fetchPolicy: 'network-only',
  });

  const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: props.id },
  });
  const [getUserBook, { data: userBook }] = useLazyQuery(GET_USER_BOOK, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (userData) {
      getWishlistId({ variables: { id: userData.id } });
      getUserBook({ variables: { userId: userData.id, bookId: props.id } });
    }
  }, [userData]);

  const toggleWishlist = (wishlist: any, bookId: any) => {
    wishlist.forEach((element: any) => {
      if (element.id == bookId) {
        setInWishlist(true);
      }
    });
  };

  useEffect(() => {
    if (wishlistid) {
      toggleWishlist(wishlistid.getWishlist, props.id);
    }
  }, [wishlistid]);

  useEffect(() => {
    if (userBook && userBook.getUserBook) {
      setInBookshelf(true);
    }
  }, [userBook]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  if (error) return <p>系統出現問題 :(</p>;

  const book = data.book;
  return (
    <BookDetailsContainer
      book={book}
      isInWishlist={isInWishlist}
      isInBookshelf={isInBookshelf}
    ></BookDetailsContainer>
  );
};

export default BookDetails;
