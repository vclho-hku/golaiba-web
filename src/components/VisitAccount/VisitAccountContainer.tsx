import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import VisitAccountContainerStyle from './VisitAccountContainerStyle';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';

const VisitAccountContainer = (props: any) => {
  const classes = props.classes;
  const userData = props.data.user;

  return (
    <div>
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
          <div className={classes.container}>
            <Link href={`/user/${userData.id}/bookshelf/visit`}>
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
            <Link href={`/user/${userData.id}/myfollowee/visit`}>
              <div style={{ cursor: 'pointer' }}>
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h4">{userData.followeeCount}</Typography>
                </div>
                <div>書友</div>
              </div>
            </Link>
            <Divider
              className={classes.divider}
              orientation="vertical"
              flexItem
            />
            <Link href={`/user/${userData.id}/myfollower/visit`}>
              <div style={{ cursor: 'pointer' }}>
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h4">{userData.followerCount}</Typography>
                </div>
                <div>粉絲</div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Divider variant="middle" style={{ margin: '10px' }} />
      <div className={classes.outerContainer}>
        <div>
          <div className={classes.container}>
            <div className={classes.infoItem}>
              <Typography variant="subtitle1">名稱: </Typography>
            </div>
            <div className={classes.infoItem}>
              <Typography variant="body1">{userData.name}</Typography>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.infoItem}>
              <Typography variant="subtitle1">性別: </Typography>
            </div>
            <div className={classes.infoItem}>
              <Typography variant="body1">{userData.gender}</Typography>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.infoItem}>
              <Typography variant="subtitle1">地區: </Typography>
            </div>
            <div className={classes.infoItem}>
              <Typography variant="body1">{userData.region}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withStyles(VisitAccountContainerStyle)(VisitAccountContainer);
