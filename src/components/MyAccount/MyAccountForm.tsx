import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MyAccountFormStyle from './MyAccountFormStyle';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { GenderList, RegionList, LanguageList } from './MyAccountFormConst';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UPDATE_USER } from '../../query/user';
import { useMutation } from '@apollo/client';
import { AuthUserContext } from '../../Session';
import Snackbar from '@material-ui/core/Snackbar';
import { useSnackbar } from 'notistack';
import Link from 'next/link';

const MyAccountForm = (props: any) => {
  const classes = props.classes;
  const userData = props.data.user;
  const { enqueueSnackbar } = useSnackbar();

  const [updateUser] = useMutation(UPDATE_USER);
  const authUser: any = useContext(AuthUserContext);
  const [userName, setUserName] = useState(userData.name);
  const [gender, setGender] = useState(userData.gender);
  const [birthDate, setBirthDate] = useState(userData.birthDate);
  const [region, setRegion] = useState(userData.region);
  const [language, setLanguage] = useState(userData.language);
  const [isSentNewsletter, setSentNewsletter] = useState(
    userData.isSentNewsletter,
  );
  const [submitting, setSubmitting] = useState(false);

  const [isShowNotifyMsg, setIsShowNotifyMsg] = useState(false);
  const handleNotificationClose = () => {};

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value);
  };
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };
  const handleNewsletterChange = (event) => {
    setSentNewsletter(event.target.checked);
  };

  const handleBirthDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBirthDate(event.target.value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitting(true);
    await updateUser({
      variables: {
        uid: authUser.uid,
        name: userName,
        gender: gender,
        birthDate: birthDate,
        region: region,
        language: language,
        isSentNewsletter: isSentNewsletter,
      },
    });
    // setIsShowNotifyMsg(true);
    enqueueSnackbar('更新賬戶資料成功!', {
      variant: 'success',
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
    setSubmitting(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          className={classes.avatar}
          src={userData.avatarImgUrl.small}
        ></Avatar>
        <Typography component="h1" variant="h5">
          賬戶資料
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={`/user/${userData.id}/bookshelf`}>
            <div style={{ cursor: 'pointer' }}>
              <div style={{ textAlign: 'center' }}>
                <Typography variant="h4">{userData.bookCount}</Typography>
              </div>
              <div>書本</div>
            </div>
          </Link>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Link href={`/user/${userData.id}/myfollowee`}>
            <div style={{ cursor: 'pointer' }}>
              <div style={{ textAlign: 'center' }}>
                <Typography variant="h4">{userData.followeeCount}</Typography>{' '}
              </div>
              <div>書友</div>
            </div>
          </Link>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Link href={`/user/${userData.id}/myfollower`}>
            <div style={{ cursor: 'pointer' }}>
              <div style={{ textAlign: 'center' }}>
                <Typography variant="h4">{userData.followerCount}</Typography>{' '}
              </div>
              <div>粉絲</div>
            </div>
          </Link>
        </div>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            margin="normal"
            fullWidth
            label="電郵地址"
            disabled
            defaultValue={userData.email}
          />
          <TextField
            margin="normal"
            fullWidth
            label="名稱"
            defaultValue={userName}
            onChange={handleUserNameChange}
          />
          <TextField
            margin="normal"
            fullWidth
            select
            label="性別"
            onChange={handleGenderChange}
            value={gender}
          >
            {GenderList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            select
            label="地區"
            onChange={handleRegionChange}
            value={region}
          >
            {RegionList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            select
            label="語言"
            onChange={handleLanguageChange}
            value={language}
          >
            {LanguageList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            id="birthDate"
            label="生日日期"
            type="date"
            fullWidth
            defaultValue={birthDate}
            onChange={handleBirthDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="勾選訂閱電子報，緊貼GOLAIBA最新資訊。"
            checked={isSentNewsletter}
            onChange={handleNewsletterChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {submitting ? <CircularProgress /> : '更新資料'}
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default withStyles(MyAccountFormStyle)(MyAccountForm);
