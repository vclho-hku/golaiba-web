import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import authorToString from '../../util/authorToString';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { UPDATE_USER_BOOK_READING_STATUS } from '../../query/userBookshelf';
import { useMutation } from '@apollo/client';
import Divider from '@material-ui/core/Divider';
import ChipInput from 'material-ui-chip-input';
import { SignalCellularNoSimOutlined } from '@material-ui/icons';
import { UserDataContext } from '../../Session';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      padding: '10px',
    },
    itemLeft: {
      padding: '0px 30px 0px 0px',
    },
    itemRight: {
      flexGrow: 1,
      flexShrink: 0,
    },
    image: {
      width: '200px',
    },
    gridItem: {
      padding: '5px',
    },
    divider: {
      margin: '20px',
    },
  }),
);

const UserBookDetails = (props: any) => {
  const classes = useStyles();
  const [tags, setTags] = useState<string[]>([]);
  const { userData } = useContext(UserDataContext);
  const book = props.userBook.book;
  const [readingStatus, setReadingStatus] = useState(
    props.userBook.readingStatus,
  );
  const [updateUserBookReadingStatus] = useMutation(
    UPDATE_USER_BOOK_READING_STATUS,
  );
  const handleChangeReadingStatus = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    const newReadingStatus = event.target.value;
    setReadingStatus(newReadingStatus);
    callChangeReadingStatus(book.id, newReadingStatus);
  };

  const callChangeReadingStatus = (bookId: any, readingStatus: any) => {
    updateUserBookReadingStatus({
      variables: {
        userId: userData.id,
        bookId: bookId,
        readingStatus: readingStatus,
      },
    });
  };
  const handleAddChip = (chip: string) => {
    setTags([...tags, chip]);
  };
  const handleDeleteChip = (chip: any, index: any) => {
    const newTags = tags.map((item) => item);
    newTags.splice(index, 1);
    setTags(newTags);
  };
  return (
    <div className={classes.container}>
      <div className={classes.itemLeft}>
        <img src={book.imageUrl.medium} className={classes.image}></img>
      </div>
      <div className={classes.itemRight}>
        <div style={{ width: 'auto', minWidth: '400px' }}>
          <Typography variant="h5">{book.title}</Typography>
          <Grid container spacing={5}>
            <Grid item xs={'auto'}>
              <Grid className={classes.gridItem}>作者:</Grid>
              <Grid className={classes.gridItem}>出版日期:</Grid>
              <Grid className={classes.gridItem}>出版社:</Grid>
            </Grid>
            <Grid item xs={'auto'}>
              <Grid className={classes.gridItem}>
                {authorToString(book.authors)}
              </Grid>
              <Grid className={classes.gridItem}>{book.publishDate}</Grid>
              <Grid className={classes.gridItem}>
                {book.publisher.name.zh_hk}
              </Grid>
            </Grid>
          </Grid>
          <Divider light className={classes.divider} />
          <div>
            <Grid container spacing={5}>
              <Grid item xs={'auto'}>
                <Grid className={classes.gridItem}>
                  <Typography variant="body1">閱讀狀態</Typography>
                </Grid>
                <Grid className={classes.gridItem}>
                  <Typography variant="body1"></Typography>
                </Grid>
              </Grid>
              <Grid item xs={'auto'}>
                <Grid className={classes.gridItem}>
                  <Select
                    labelId="user-book-reading-status-select-label"
                    id="user-book-reading-status-select"
                    value={readingStatus}
                    onChange={handleChangeReadingStatus}
                  >
                    <MenuItem value={'pending'}>未看</MenuItem>
                    <MenuItem value={'reading'}>正在看</MenuItem>
                    <MenuItem value={'finished'}>看完</MenuItem>
                  </Select>
                </Grid>
                <Grid className={classes.gridItem}></Grid>
              </Grid>
            </Grid>
            <ChipInput
              label="自定標籤"
              value={tags}
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookDetails;
