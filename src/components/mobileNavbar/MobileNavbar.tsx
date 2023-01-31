import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import UserAvatar from '../userInfo/userAvatar/UserAvatar';
import { userData } from '@/types/user';
import styles from './MobileNavbar.module.css';
import MenuList from '../menu/menulist/MenuList';

export default function MenuAppBar() {
  const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
  const [userEl, setUserEl] = React.useState<null | HTMLElement>(null);

  const handleUser = (event: React.MouseEvent<HTMLElement>) => {
    setUserEl(event.currentTarget);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserEl(null);
    setMenuEl(null);
  };

  return (
      <AppBar position="static" className={styles.appBar}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton
              size="large"
              aria-label="Menu"
              aria-controls="menu-items"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-items"
              anchorEl={menuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuEl)}
              onClose={handleClose}
            >
              <MenuList />
            </Menu>
          </Grid>
          
          
          <Grid item>
            <IconButton
              size="large"
              aria-label="User"
              aria-controls="user-info"
              aria-haspopup="true"
              onClick={handleUser}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="user-info"
              anchorEl={userEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userEl)}
              onClose={handleClose}
            >
              <UserAvatar user={userData}/>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
  );
}