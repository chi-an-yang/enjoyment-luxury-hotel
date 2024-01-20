import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import NavbarUser from './NavbarUser';

const NavbarList = () => {
  const username: string = ''; // TODO:之後資料來源替換成 Zustand
  return (
    <Box className="navbarLists">
      <Button className="button">
        <Link to="/rooms" className="link rooms">
          客房旅館
        </Link>
      </Button>
      <NavbarUser username={username} />
      <Button className="button reservation" variant="contained">
        <Link to="/reservation" className="link ">
          立即訂房
        </Link>
      </Button>
    </Box>
  );
};

const NavMenuList = () => {
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand
  const userinfo = username ? '我的帳戶' : '會員登入';
  const handleLogout = () => {
    // 登出
  };
  return (
    <>
      <Button className="button">
        <Link to="/rooms" className="link rooms">
          <Typography variant="body1">客房旅館</Typography>
        </Link>
      </Button>
      <Button className="button">
        <Link to="/rooms" className="link userinfo">
          <Typography variant="body1">{userinfo}</Typography>
        </Link>
      </Button>
      <Button className="button" variant="contained">
        <Link to="/reservation" className="link reservation">
          <Typography variant="body1">立即訂房</Typography>
        </Link>
      </Button>
      {username && (
        <Button className="button" onClick={handleLogout}>
          <Typography variant="body1">登出</Typography>
        </Button>
      )}
    </>
  );
};

export { NavbarList, NavMenuList };
