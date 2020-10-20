import React, { FunctionComponent, useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { compose } from 'recompose';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignUpFormStyle from './SignUpFormStyle';
import { withStyles } from '@material-ui/core/styles';
import { withFirebase } from '../../Firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  userPassword: '',
  confirmPassword: '',
  invalidEmail: false,
  isSubmitting: false,
  passwordNotMatch: false,
  passwordTooShort: false,
  error: '',
};

const checkEmail = (email: any) => {
  const includedAt = email.includes('@');
  if (!includedAt) {
    return true;
  }
  let emailArray = email.split('@');
  if (emailArray.length !== 2) {
    return true;
  }
  var emailDomain = emailArray[1].split('.');
  if (emailDomain.length < 2 || emailDomain[1].length < 1) {
    return true;
  }
  return false;
};

const translateErrorMessage = (error: any) => {
  let msg = '';
  if (error.code) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        msg = '電郵地址已被注冊，請用其他電郵地址或嘗試登入。';
        break;
      case 'auth/invalid-email':
        msg = '電郵地址格式不正確，請再確認一下。';
        break;
      case 'auth/operation-not-allowed':
        msg = '注冊禁止，請聯繫客服解封。';
        break;
      case 'auth/weak-password':
        msg = '密碼太簡單，請用比較長及包含大小寫字母。';
        break;
      default:
        msg = `CODE ${error.code}: 對不起，系統出錯，請稍候再試。`;
    }
  } else {
    msg = 'CODE 0001: 對不起，系統出錯，請稍候再試。';
  }
  return msg;
};

const SignUpForm: FunctionComponent = (props: any) => {
  const [state, setState] = useState(INITIAL_STATE);
  const {
    username,
    email,
    userPassword,
    confirmPassword,
    invalidEmail,
    isSubmitting,
    passwordNotMatch,
    passwordTooShort,
    error,
  } = state;

  const isInvalid =
    invalidEmail ||
    passwordNotMatch ||
    userPassword === '' ||
    passwordTooShort ||
    confirmPassword === '' ||
    email === '' ||
    username === '';

  const onChange = (event: any) => {
    switch (event.target.name) {
      case 'email':
        setState({
          ...state,
          [event.target.name]: event.target.value,
          invalidEmail: checkEmail(event.target.value),
        });
        break;
      case 'confirmPassword':
        setState({
          ...state,
          [event.target.name]: event.target.value,
          passwordNotMatch: userPassword !== event.target.value,
        });
        break;
      case 'userPassword':
        setState({
          ...state,
          [event.target.name]: event.target.value,
          passwordTooShort: event.target.value.length < 6,
        });
        break;
      default:
        setState({ ...state, [event.target.name]: event.target.value });
        break;
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setState({ ...state, isSubmitting: true });
    try {
      await props.firebase.doCreateUserWithEmailAndPassword(
        email,
        userPassword,
      );
      setState({ ...INITIAL_STATE });
      // props.history.push(ROUTES.HOME);
    } catch (error) {
      let errorMsg = translateErrorMessage(error);
      setState({
        ...state,
        isSubmitting: false,
        error: errorMsg,
      });
    }
  };
  const classes = props.classes;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccessibilityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          會員注冊
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            onChange={onChange}
            label="名稱"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            error={invalidEmail}
            onChange={onChange}
            label="電郵地址"
            name="email"
          />
          {invalidEmail && <Alert severity="error">"電郵地址不符合規格"</Alert>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="密碼"
            type="password"
            id="userPassword"
            onChange={onChange}
          />
          {passwordTooShort && (
            <Alert severity="error">"密碼長度要大於6"</Alert>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            error={passwordNotMatch}
            label="確認密碼"
            type="password"
            id="confirmPassword"
            onChange={onChange}
          />
          {passwordNotMatch && (
            <Alert severity="error">"確認密碼與密碼不同"</Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid || isSubmitting}
            className={classes.submit}
          >
            注冊
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </form>
      </div>
    </Container>
  );
};

export default compose(
  withFirebase,
  withStyles(SignUpFormStyle),
)(SignUpForm);