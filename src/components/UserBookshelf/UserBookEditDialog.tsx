import React, { useEffect, useState } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ChipInput from 'material-ui-chip-input';
import Chip from '@material-ui/core/Chip';
import UserBookReview from '../UserBookDetails/UserBookReview';
import {
  ADD_USER_BOOK_TAG,
  REMOVE_USER_BOOK_TAG,
} from '../../query/userBookshelf';
import { useMutation } from '@apollo/client';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      height: '60px',
      width: '800px',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const UserBookEditDialog = (props: any) => {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<any>({});
  const [readingStatus, setReadingStatus] = useState<string>('reading');
  const [tags, setTags] = useState<string[]>([]);
  const [addUserBookTag] = useMutation(ADD_USER_BOOK_TAG);
  const [removeUserBookTag] = useMutation(REMOVE_USER_BOOK_TAG);

  const handleAddUserBookTag = (tag: any) => {
    addUserBookTag({
      variables: {
        userId: props.userId,
        bookId: props.userBook.book.id,
        tag: tag,
      },
    });
  };

  const handleRemoveUserBookTag = (tag: any) => {
    removeUserBookTag({
      variables: {
        userId: props.userId,
        bookId: props.userBook.book.id,
        tag: tag,
      },
    });
  };

  const handleAddChip = (chip: string) => {
    setTags([...tags, chip]);
    handleAddUserBookTag(chip);
  };
  const handleDeleteChip = (chip: any, index: any) => {
    const newTags = tags.map((item) => item);
    newTags.splice(index, 1);
    setTags(newTags);
    handleRemoveUserBookTag(chip);
  };

  const handleSuggestChipClick = (chip: any) => {
    if (tags.indexOf(chip) == -1) {
      handleAddChip(chip);
    }
  };

  const handleClose = () => {
    props.onClose();
  };
  const handleChangeReadingStatus = (
    event: React.ChangeEvent<{ value: any }>,
  ) => {
    const newReadingStatus = event.target.value;
    setReadingStatus(newReadingStatus);
    props.handleChangeReadingStatus(props.userBook.book.id, newReadingStatus);
  };

  useEffect(() => {
    if (props.userBook) {
      setReadingStatus(props.userBook.readingStatus);
      setBook(props.userBook.book);
      setTags(props.userBook.tags);
    }
  }, [props.userBook]);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        編輯書籍資訊
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{book.title}</Typography>
        <Divider light style={{ margin: '10px' }} />
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={'auto'}>
            <div style={{ textAlign: 'center' }}>變更閱讀狀態</div>
          </Grid>
          <Grid item xs={'auto'}>
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
        </Grid>
        <ChipInput
          label="自定標籤"
          value={tags}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
        />
        <Divider light style={{ margin: '10px' }} />
        <Typography variant="body1">常用標籤</Typography>
        {props.userTags.map((userTag: string) => {
          return (
            <Chip
              key={userTag}
              label={userTag}
              onClick={() => handleSuggestChipClick(userTag)}
            />
          );
        })}
        <Divider light style={{ margin: '10px' }} />
        <UserBookReview bookId={book.id} />
      </DialogContent>
    </Dialog>
  );
};

export default UserBookEditDialog;
