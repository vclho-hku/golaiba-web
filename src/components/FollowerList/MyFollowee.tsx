import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UserItem from './UserItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_FOLLOWEE, REMOVE_FOLLOWEE } from '../../query/followList';
import Typography from '@material-ui/core/Typography';
import SearchFollowee from './SearchFollowee';
import Divider from '@material-ui/core/Divider';
import MyFolloweeList from './MyFolloweeList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    userItemContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
);

const MyFollowee = (props: any) => {
  const [reload, setReloading] = useState(false);
  const refreshFolloweeList = () => {
    setReloading(!reload);
  };

  return (
    <div>
      <Typography variant="h5">尋找書友</Typography>
      <SearchFollowee
        userId={props.userId}
        refreshFolloweeList={refreshFolloweeList}
      />
      <Divider style={{ margin: '20px' }} />
      <MyFolloweeList userId={props.userId} reload={reload} />
    </div>
  );
};

export default MyFollowee;
