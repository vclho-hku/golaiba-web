import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      margin: '15px',
      paddingTop: '20px',
      flexWrap: 'wrap',
    },
    item: {
      marginBottom: '7px',
      display: 'flex',
      paddingLeft: '10px',
    },
  }),
);

const BookSearchToolBar = (props: any) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = React.useState(null);
  const [sortingValue, setSortingValue] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState(null);

  const handleFilterChange = (event: any) => {
    setFilterValue(event.target.value);
  };
  const handleSortingChange = (event: any) => {
    setSortingValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-filter-native-simple">篩選</InputLabel>
          <Select
            native
            value={filterValue}
            onChange={handleFilterChange}
            label="篩選"
            inputProps={{
              name: 'filterValue',
              id: 'outlined-filter-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>已看</option>
            <option value={20}>未看</option>
            <option value={30}>正在看</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.item}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-sorting-native-simple">排序</InputLabel>
          <Select
            native
            value={sortingValue}
            onChange={handleSortingChange}
            label="排序"
            inputProps={{
              name: 'sortingValue',
              id: 'outlined-sorting-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>由新到舊</option>
            <option value={20}>由舊到新</option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default BookSearchToolBar;
