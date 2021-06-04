import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import CollectionsRoundedIcon from '@material-ui/icons/CollectionsRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import FormatBoldRoundedIcon from '@material-ui/icons/FormatBoldRounded';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@material-ui/icons/FormatUnderlinedRounded';
import FormatAlignLeftRoundedIcon from '@material-ui/icons/FormatAlignLeftRounded';
import FormatAlignCenterRoundedIcon from '@material-ui/icons/FormatAlignCenterRounded';
import FormatAlignRightRoundedIcon from '@material-ui/icons/FormatAlignRightRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar: {
      marginTop: '15px',
      display: 'flex',
      alignItems: 'center',
    },
    separator: {
      borderRight: '2px solid black',
      paddingLeft: '3px',
      height: '15px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
);
const titleStyles = (theme: Theme) =>
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

export interface DialogTitleProps extends WithStyles<typeof titleStyles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(titleStyles)((props: DialogTitleProps) => {
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

const NewPostDialog = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    props.onClose();
  };

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
        <div style={{ color: '#ffffff', fontSize: '20px' }}>開新主題</div>
      </DialogTitle>
      <DialogContent>
        <div>
          <TextField id="topic" label="你的主題（50字以內）" fullWidth />
        </div>
        <div className={classes.toolBar}>
          <div>
            <IconButton aria-label="image">
              <CollectionsRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="color">
              <ColorLensRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="bold">
              <FormatBoldRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="italic">
              <FormatItalicRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="underline">
              <FormatUnderlinedRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="align-left">
              <FormatAlignLeftRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="align-center">
              <FormatAlignCenterRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="align-right">
              <FormatAlignRightRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="link">
              <LinkRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="code">
              <CodeRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.separator}></div>
          <div>
            <IconButton aria-label="lock">
              <LockRoundedIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <TextField
            id="topic"
            label="主題內容"
            fullWidth
            multiline
            rows={5}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            style={{ margin: 8 }}
          />
        </div>
        <div className={classes.buttonContainer}>
          <div style={{ marginRight: '10px' }}>
            <Button
              variant="contained"
              color="default"
              startIcon={<VisibilityRoundedIcon />}
            >
              預覽內容
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendRoundedIcon />}
            >
              發表主題
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostDialog;
