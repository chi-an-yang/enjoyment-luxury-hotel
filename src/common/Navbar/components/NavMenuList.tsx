import Link from '@mui/material/Link';
import { useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import useNavMenuListStyle from '../style/useNavMenuListStyle';

const NavMenuList = ({ showNavMenu }: { showNavMenu: boolean }) => {
  const { palette } = useTheme();

  const navMenuList = useNavMenuListStyle();
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand
  const userinfo = username ? '我的帳戶' : '會員登入';
  const handleLogout = () => {
    // 登出
  };

  const navMenuListItemStyle = {
    display: 'flex',
    width: { xs: '100%' },
    height: { xs: '56px' },
    color: palette.neutral[0],
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
          sx={{ width: { xs: '100%' }, color: palette.neutral[0], textDecoration: 'none' }}
        >
          <Typography variant="body1">{name}</Typography>
        </Link>
      </Button>
    );
  };

  return (
    <Box sx={navMenuList} className={showNavMenu ? 'open' : ''}>
      <NavMenuListItem url="rooms" name="客房旅館" />
      <NavMenuListItem url="user-info" name={userinfo} />
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
