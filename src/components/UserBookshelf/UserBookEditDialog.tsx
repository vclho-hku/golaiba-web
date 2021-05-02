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
  const [readingStatus, setReadingStatus] = useState('reading');
  const [tags, setTags] = useState<string[]>([]);

  const handleAddChip = (chip: string) => {
    setTags([...tags, chip]);
  };
  const handleDeleteChip = (chip: any, index: any) => {
    const newTags = tags.map((item) => item);
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleClose = () => {
    props.onClose();
  };
  const handleChangeReadingStatus = () => {};
  useEffect(() => {
    if (props.book) {
      setBook(props.book);
    }
  }, [props.book]);

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
        <Chip label="Basic" />
        <Divider light style={{ margin: '10px' }} />
        <UserBookReview bookId={book.id} />
      </DialogContent>
    </Dialog>
  );
};

export default UserBookEditDialog;
