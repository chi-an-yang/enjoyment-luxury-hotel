import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, Button, Menu, SvgIcon, MenuItem, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MdOutlineAccountCircle } from 'react-icons/md';

const navbarUserButtonStyle = {
  color: (theme: Theme) => theme.palette.neutral[0],
  marginLeft: '16px',
  padding: '16px',
};

const navbarUserLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  '&:first-of-type': {
    marginLeft: '0',
  },
};

const nvaMenuItemStyle = {
  height: '56px',
  transition: 'all .3s',
  '&:hover': {
    backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[10],
    color: (theme: Theme) => theme.palette.hotelPrimary[100],
  },
};

const NavbarUser = ({ username }: { username: string }) => {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // 登出
  };
  if (!username) {
    return (
      <Button sx={navbarUserButtonStyle}>
        <Link component={RouterLink} to="/login" sx={navbarUserLinkStyle} className="login">
          會員登入
        </Link>
      </Button>
    );
  }
  return (
    <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Button sx={navbarUserButtonStyle} onClick={handleMenu}>
          <SvgIcon sx={{ color: palette.neutral[0] }}>
            <MdOutlineAccountCircle />
          </SvgIcon>
          <Box sx={{ ml: 1 }}>{username}</Box>
        </Button>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: '260px',
              borderRadius: '20px',
              padding: '12px 0',
            },
          },
        }}
      >
        <MenuItem sx={nvaMenuItemStyle}>
          <Link
            component={RouterLink}
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/member/user-info"
          >
            我的帳戶
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={nvaMenuItemStyle}>
          登出
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavbarUser;
