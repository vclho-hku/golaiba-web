const VisitAccountContainerStyle: any = (theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: theme.palette.secondary.main,
  },
  divider: {
    marginLeft: '20px',
    marginRight: '20px',
  },
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  infoItem: {
    padding: '5px',
  },
});

export default VisitAccountContainerStyle;
