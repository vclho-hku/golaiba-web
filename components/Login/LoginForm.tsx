import React, { FunctionComponent, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import LoginFormStyle from './LoginFormStyle';
import SignUpLink from '../SignUp/SignUpLink';

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

const LoginForm: FunctionComponent = (props: any) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password, error } = state;
  const classes = props.classes;

  const isInvalid = password === '' || email === '';
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      let auth = await props.firebase.doSignInWithEmailAndPassword(
        email,
        password,
      );
      setState({ ...INITIAL_STATE });
    } catch (error) {
      console.log(error);
      let errorMsg = translateErrorMessage(error);
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

export default withStyles(LoginFormStyle)(LoginForm);