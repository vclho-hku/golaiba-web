import React from 'react';
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
const MyAccountForm = (props: any) => {
  const classes = props.classes;
  const userData = props.data.user;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>G</Avatar>
        <Typography component="h1" variant="h5">
          會員資料
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="名稱"
            defaultValue={userData.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="電郵地址"
            defaultValue={userData.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            select
            label="性別"
          >
            <MenuItem>隱藏</MenuItem>
            <MenuItem>男</MenuItem>
            <MenuItem>女</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            select
            label="地區"
          >
            <MenuItem>香港</MenuItem>
            <MenuItem>台灣</MenuItem>
            <MenuItem>大陸</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            select
            label="語言"
          >
            <MenuItem>中文(香港)</MenuItem>
            <MenuItem>中文(台灣)</MenuItem>
            <MenuItem>中文(大陸)</MenuItem>
          </TextField>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="勾選訂閱電子報，緊貼GOLAIBA最新資訊。"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            更新資料
          </Button>
          <Button fullWidth variant="contained" color="primary">
            更改密碼
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default withStyles(MyAccountFormStyle)(MyAccountForm);
