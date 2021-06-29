import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Favorite from '@material-ui/icons/Favorite';
import { grey } from '@material-ui/core/colors';
import Link from 'next/link';
import Logout from '../Logout';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

const NavUserMenu = (props: any) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Link href={`/user/${props.userId}/follower-list`}>
            <Button style={{ minWidth: '20px' }}>
              <Badge color="secondary" variant="dot">
                <NotificationsIcon style={{ color: 'white' }} />
              </Badge>
            </Button>
          </Link>
          <Link href={`/user/${props.userId}/bookshelf`}>
            <Button style={{ minWidth: '20px' }}>
              <img
                style={{ width: '24px', color: 'white' }}
                src="/bookshelf_icon.svg"
              ></img>
            </Button>
          </Link>
          <Link href={`/user/${props.userId}/wishlist`}>
            <Button style={{ minWidth: '20px' }}>
              <Favorite style={{ color: 'white' }} />
            </Button>
          </Link>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ minWidth: '20px' }}
          >
            <AccountCircleIcon style={{ color: 'white' }} />
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement={'bottom-end'}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link href={`/user/${props.userId}/myaccount`}>
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        我的帳戶
                      </MenuItem>
                    </Link>
                    <Link href={`/user/${props.userId}/wishlist`}>
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        想看清單
                      </MenuItem>
                    </Link>
                    <Link href={`/user/${props.userId}/bookshelf`}>
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        我的書櫃
                      </MenuItem>
                    </Link>
                    <Link href={`/user/${props.userId}/follower-list`}>
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        我的書友
                      </MenuItem>
                    </Link>
                    <Logout></Logout>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default NavUserMenu;
