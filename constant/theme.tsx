import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import amber from '@material-ui/core/colors/amber';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: amber[700],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;


//bar: backgroundColor: amber[700]