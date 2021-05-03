const BookDetailsInfoStyle: any = (theme: any) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up(700)]: {
      flexWrap: 'nowrap',
    },
  },
  bookShareContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bookImage: {
    width: '300px',
  },
  bookInfoSubInfoContainer: {
    display: 'flex',
    padding: '5px',
  },
  bookInfoSubInfoTitle: {
    width: '100px',
  },
  title: {
    marginBottom: '15px',
  },
  bottonContainer: {
    display: 'flex',
  },
});

export default BookDetailsInfoStyle;
