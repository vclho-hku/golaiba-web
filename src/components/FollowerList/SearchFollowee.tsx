import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import UserSearchResult from './UserSearchResult';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '500px',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }),
);

const SearchFollowee = (props: any) => {
  const classes = useStyles();
  const [keywords, setKeywords] = useState(null);
  const [inputKeywords, setInputKeywords] = useState(null);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setKeywords(inputKeywords);
  };
  const onChange = (event: any) => {
    setInputKeywords(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Paper component="form" className={classes.root}>
          <InputBase
            name="inputKeywords"
            className={classes.input}
            placeholder="請輸入關鍵字"
            onChange={onChange}
            inputProps={{ 'aria-label': '請輸入關鍵字' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      <div>
        <UserSearchResult
          keywords={keywords}
          userId={props.userId}
          refreshFolloweeList={props.refreshFolloweeList}
        ></UserSearchResult>
      </div>
    </div>
  );
};

export default SearchFollowee;
