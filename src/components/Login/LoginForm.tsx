import React, { FunctionComponent, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { compose } from 'recompose';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import Alert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import LoginFormStyle from './LoginFormStyle';
import SignUpLink from '../SignUp/SignUpLink';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Theme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import { withFirebase } from '../../Firebase';
import { useRouter } from 'next/router';
import * as ROUTES from '../../constant/routes';

const translateErrorMessage = (error: any) => {
  let msg = '';
  if (error.code) {
    switch (error.code) {
      case 'auth/user-not-found':
        msg = '電郵地址錯誤，找不到相對的會員';
        break;
      case 'auth/wrong-password':
        msg = '密碼錯誤，請再次輸入。';
        break;
      default:
        msg = `CODE ${error.code}: 對不起，系統出錯，請稍候再試。`;
    }
  } else {
    msg = 'CODE 0001: 對不起，系統出錯，請稍候再試。';
  }
  return msg;
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
};
const GoogleButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(red[400]),
    backgroundColor: red[400],
    '&:hover': {
      backgroundColor: red[600],
    },
    marginTop: '10px',
    marginBottom: '10px',
  },
}))(Button);

const FacebookButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
}))(Button);

const LoginForm: FunctionComponent = (props: any) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password, error } = state;
  const router = useRouter();
  const classes = props.classes;

  const isInvalid = password === '' || email === '';

  const onGoogleLogin = async () => {
    await props.firebase.doSignInWithGoogle();
    router.push(ROUTES.HOME);
  };

  const onFacebookLogin = async () => {
    await props.firebase.doSignInWithFacebook();
    router.push(ROUTES.HOME);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await props.firebase.doSignInWithEmailAndPassword(email, password);
      setState({ ...INITIAL_STATE });
      router.push(ROUTES.HOME);
    } catch (error) {
      console.log(error);
      const errorMsg = translateErrorMessage(error);
      setState({ ...state, error: errorMsg });
    }
  };
  const onChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          會員登入
        </Typography>
        <GoogleButton onClick={onGoogleLogin} fullWidth variant="contained">
          <FontAwesomeIcon icon={faGoogle} />
          使用 Google 登入
        </GoogleButton>
        <FacebookButton onClick={onFacebookLogin} fullWidth variant="contained">
          <FacebookIcon /> 使用 Facebook 登入
        </FacebookButton>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={onChange}
            label="電郵地址"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密碼"
            type="password"
            id="password"
            onChange={onChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
            className={classes.submit}
          >
            登入
          </Button>
          <Grid container>
            <Grid item>
              <SignUpLink />
            </Grid>
          </Grid>

          {error && <Alert severity="error">{error}</Alert>}
        </form>
      </div>
    </Container>
  );
};

export default compose(withFirebase, withStyles(LoginFormStyle))(LoginForm);
