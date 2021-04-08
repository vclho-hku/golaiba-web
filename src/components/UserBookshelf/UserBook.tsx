import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 200,
      margin: '10px',
    },
    cardHeader: {
      cursor: 'pointer',
    },
    cardHeaderText: {
      width: 190,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    media: {
      height: '300px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const UserBook = (props: any) => {
  const classes = useStyles();
  const book = props.book;
  const [show, setShow] = useState('block');
  const [readingStatus, setReadingStatus] = React.useState(props.readingStatus);

  const handleDeleteUserBook = () => {
    setShow('none');
    props.handleDeleteUserBook(book.id);
  };
  const handleChangeReadingStatus = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    const newReadingStatus = event.target.value;
    setReadingStatus(newReadingStatus);
    props.handleChangeReadingStatus(book.id, newReadingStatus);
  };
  return (
    <Card className={classes.root} style={{ display: show }}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          title: classes.cardHeaderText,
          subheader: classes.cardHeaderText,
        }}
        title={book.title}
        subheader={book.subtitle}
      />
      <CardMedia
        className={classes.media}
        image={book.imageUrl.medium}
        title={book.title}
      />
      <CardActions disableSpacing>
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
        <IconButton aria-label="delete" onClick={handleDeleteUserBook}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserBook;
