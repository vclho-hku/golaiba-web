import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

import { RegionList, PlaceFilterList } from './MapSelectionData';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import MapContainer from './MapContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectorContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    selectItem: {
      minWidth: '100px',
      width: '300px',
      margin: '10px',
    },
    regionList: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);

const MapContent = (props: any) => {
  const classes = useStyles();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedFilterPlace, setSelectedFilterPlace] = useState('');
  const placeFilterList: string[] = PlaceFilterList;
  const regionList: {
    id: number;
    section: string;
    regions: string[];
  }[] = RegionList;

  const clickedRegion = (region: any) => {
    setSelectedRegion(region);
  };

  const filterItemOnClick = (event: any) => {
    event.stopPropagation();
    setSelectedFilterPlace('abc');
  };
  return (
    <div>
      <div className={classes.selectorContainer}>
        <div className={classes.selectItem}>
          <OutlinedInput
            fullWidth
            id="map-search-keyword"
            placeholder="輸入關鍵詞（如街道，店名）"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="map-search-keyword"
            labelWidth={0}
          />
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            label="篩選地方特色"
            select
            variant="outlined"
            value={selectedFilterPlace}
            className={classes.selectItem}
          >
            <List>
              {placeFilterList.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem key={value} role={undefined} dense button>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={filterItemOnClick}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItem>
                );
              })}
            </List>
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            label="按地區搜索"
            select
            variant="outlined"
            className={classes.selectItem}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={<li />}
              className={classes.regionList}
            >
              {regionList.map((list) => (
                <li
                  key={`section-${list.section}`}
                  className={classes.listSection}
                >
                  <ul className={classes.ul}>
                    <ListSubheader>{`${list.section}`}</ListSubheader>
                    {list.regions.map((region) => (
                      <ListItem
                        key={`item-${list.section}-${region}`}
                        onClick={() => clickedRegion(region)}
                        style={{ cursor: 'pointer' }}
                      >
                        <ListItemText primary={`${region}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
          </TextField>
        </div>
      </div>
      <div>
        <MapContainer></MapContainer>
      </div>
    </div>
  );
};

export default MapContent;
