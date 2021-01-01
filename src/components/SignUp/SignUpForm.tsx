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
import { useRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constant/routes';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../query/user';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { checkEmailFormat, translateErrorMessage } from '../../util';

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

const SignUpForm: FunctionComponent = (props: any) => {
  const [state, setState] = useState(INITIAL_STATE);
  const router = useRouter();
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

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      router.push(ROUTES.HOME);
    },
  });

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
          invalidEmail: checkEmailFormat(event.target.value),
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
        if (confirmPassword !== '') {
          setState({
            ...state,
            passwordNotMatch: confirmPassword !== event.target.value,
          });
        }
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
      const firebaseResult = await props.firebase.doCreateUserWithEmailAndPassword(
        email,
        userPassword,
      );
      setState({ ...INITIAL_STATE });
      createUser({
        variables: {
          uid: firebaseResult.user.uid,
          name: username,
          email: email,
        },
      });
    } catch (error) {
      const errorMsg = translateErrorMessage(error);
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
          {invalidEmail && <Alert severity="error">電郵地址不符合規格</Alert>}
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
          {passwordTooShort && <Alert severity="error">密碼長度要大於6</Alert>}
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
            <Alert severity="error">確認密碼與密碼不同</Alert>
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
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default compose(withFirebase, withStyles(SignUpFormStyle))(SignUpForm);
