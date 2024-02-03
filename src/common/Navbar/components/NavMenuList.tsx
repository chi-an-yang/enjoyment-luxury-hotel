import Link from '@mui/material/Link';
import { Theme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const navMenuListItemStyle = {
  display: 'flex',
  width: { xs: '100%' },
  height: { xs: '56px' },
  color: (theme: Theme) => theme.palette.neutral[0],
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  '&:last-child': {
    marginBottom: 0,
  },
};

const NavMenuListItem = ({
  url,
  variant = 'text',
  name,
}: {
  url: string;
  variant?: 'text' | 'contained' | 'outlined';
  name: string;
}) => {
  return (
    <Button sx={navMenuListItemStyle} className={url} variant={variant}>
      <Link
        component={RouterLink}
        to={`/${url}`}
        sx={{
          width: { xs: '100%' },
          color: (theme: Theme) => theme.palette.neutral[0],
          textDecoration: 'none',
        }}
      >
        <Typography variant="body1">{name}</Typography>
      </Link>
    </Button>
  );
};

const NavMenuList = ({ showNavMenu }: { showNavMenu: boolean }) => {
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand
  const userinfo = username ? '我的帳戶' : '會員登入';
  const userurl = username ? 'user-info' : 'login';
  const handleLogout = () => {
    // 登出
  };

  return (
    <Box
      sx={{
        flex: '1 0 auto',
        display: 'flex',
        position: 'fixed',
        top: '50%',
        left: '-50px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        opacity: 0,
        width: 0,
        transform: 'translateY(-50%)',
        transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        '&.open': {
          left: 0,
          opacity: 1,
          width: '100%',
        },
      }}
      className={showNavMenu ? 'open' : ''}
    >
      <NavMenuListItem url="rooms" name="客房旅館" />
      <NavMenuListItem url={userurl} name={userinfo} />
      <NavMenuListItem url="reservation" variant="contained" name="立即訂房" />
      {username && (
        <Button sx={navMenuListItemStyle} onClick={handleLogout}>
          <Typography variant="body1">登出</Typography>
        </Button>
      )}
    </Box>
  );
};

export default NavMenuList;
