import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import NewPostDialog from './NewPostDialog';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftPanel: {
      padding: '15px',
    },
    rightPanel: {
      padding: '15px',
      display: 'flex',
    },
    button: {
      marginLeft: '10px',
      borderRadius: '20px',
    },
  }),
);

const Header = (props: any) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [showSearchTextField, setShowSearchTextField] = useState<any>(false);
  const handleOpenEditDialog = () => {
    setOpenDialog(true);
  };
  const handleDialogOnClose = () => {
    setOpenDialog(false);
  };
  const handleStartSearch = () => {
    setShowSearchTextField(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            上書房
          </Link>
          <Typography color="textPrimary">討論區</Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.rightPanel}>
        {showSearchTextField && (
          <div>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              <Input
                id="standard-adornment-weight"
                aria-describedby="standard-weight-helper-text"
                autoFocus
              />
            </Button>
          </div>
        )}
        {!showSearchTextField && (
          <div>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={handleStartSearch}
            >
              搜尋主題
            </Button>
          </div>
        )}

        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleOpenEditDialog}
          >
            開新主題
          </Button>
        </div>
      </div>
      <NewPostDialog
        open={openDialog}
        onClose={handleDialogOnClose}
      ></NewPostDialog>
    </div>
  );
};

export default Header;
