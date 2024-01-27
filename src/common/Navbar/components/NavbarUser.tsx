import { useState } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Menu, SvgIcon, MenuItem } from '@mui/material';
import { MdOutlineAccountCircle } from 'react-icons/md';
import useNavbarUserStyle from '../style/useNavbarUserStyle';

const NavbarUser = ({ username }: { username: string }) => {
  const navbarUserStyle = useNavbarUserStyle();
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
      <Box sx={navbarUserStyle}>
        <Button className="button">
          <Link component={RouterLink} to="/login" className="link login">
            會員登入
          </Link>
        </Button>
      </Box>
    );
  }
  return (
    <Box sx={navbarUserStyle}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Button className="button" onClick={handleMenu}>
          <SvgIcon sx={{ color: '#fff' }}>
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
      >
        <MenuItem>
          <Link
            component={RouterLink}
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/member/user-info"
          >
            我的帳戶
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>登出</MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarUser;
