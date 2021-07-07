import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { GET_USER_DETAILS } from '../../query/user';
import { useLazyQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    bannerContainer: {
      width: '100%',
      height: '400px',
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
    },
    banner: {
      width: '1250px',
      height: '380px',
      backgroundImage: `url('/user_banner.png')`,
      backgroundRepeat: 'no-repeat',
    },
    bannerInfo: {
      display: 'flex',
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: '30px',
      flexWrap: 'wrap',
    },
    avatar: {
      width: '80px',
      height: '80px',
    },
    divider: {
      marginLeft: '20px',
      marginRight: '20px',
      border: '2px solid white',
    },
  }),
);

const UserBanner = (props: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    user: {
      id: '',
      name: '',
      createdAt: '',
      bookCount: '',
      followeeCount: '',
      followerCount: '',
    },
  });
  const [getUserDetails, { data: userDetailsData }] = useLazyQuery(
    GET_USER_DETAILS,
    {
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (props.userId) {
      getUserDetails({ variables: { id: props.userId } });
    }
  }, [props.userId]);

  useEffect(() => {
    if (userDetailsData) {
      setUserDetails(userDetailsData);
      setLoading(false);
    }
  }, [userDetailsData]);

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <div className={classes.bannerContainer}>
        <div className={classes.banner}>
          <div className={classes.bannerInfo}>
            <div style={{ display: 'flex', marginLeft: '20px' }}>
              <div>
                <Avatar className={classes.avatar}></Avatar>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                }}
              >
                <div>
                  <Typography component="h1" variant="h5">
                    {userDetails.user.name}
                  </Typography>
                </div>
                <div>加入上書房自：{userDetails.user.createdAt}</div>
              </div>
            </div>
            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link href={`/user/${userDetails.user.id}/bookshelf`}>
                  <div style={{ cursor: 'pointer' }}>
                    <div style={{ textAlign: 'center' }}>
                      <Typography variant="h4">
                        {userDetails.user.bookCount}
                      </Typography>
                    </div>
                    <div>書本</div>
                  </div>
                </Link>
                <Divider
                  className={classes.divider}
                  orientation="vertical"
                  flexItem
                />
                <Link href={`/user/${userDetails.user.id}/myfollowee`}>
                  <div style={{ cursor: 'pointer' }}>
                    <div style={{ textAlign: 'center' }}>
                      <Typography variant="h4">
                        {userDetails.user.followeeCount}
                      </Typography>{' '}
                    </div>
                    <div>追蹤</div>
                  </div>
                </Link>
                <Divider
                  className={classes.divider}
                  orientation="vertical"
                  flexItem
                />
                <Link href={`/user/${userDetails.user.id}/myfollower`}>
                  <div style={{ cursor: 'pointer' }}>
                    <div style={{ textAlign: 'center' }}>
                      <Typography variant="h4">
                        {userDetails.user.followerCount}
                      </Typography>{' '}
                    </div>
                    <div>粉絲</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
