const BookDetailsContainerStyle: any = (theme: any) => ({
  root: {
    paddingTop: '30px',
    paddingLeft: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: '400px',
    backgroundSize: 'contain',
    paddingTop: '0%', // 16:9
    cursor: 'pointer',
    backgroundPosition: 'left',
  },
  loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  tag: {
    backgroundColor: '#E0DFE0',
    padding: '5px',
    borderRadius: '5px',
  },
  container: {
    marginTop: '10px',
  },
  button: {
    width: '200px',
    textAlign: 'center',
    borderColor: '#CAC194',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '5px 5px 5px 5px',
  },
});

export default BookDetailsContainerStyle;
