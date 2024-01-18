import { useState } from 'react';
import {
  Box,
  IconButton,
  Toolbar,
  AppBar,
  useTheme,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import Logo from '@src/assets/logo.svg?react';

interface MenuIconProps {
  show: boolean;
}
const MenuIcon = ({ show }: MenuIconProps) => {
  return <>{show ? <MdClose size="large" /> : <MdMenu />}</>;
};
const navbarLists = [
  { src: '/rooms', text: '客房旅館' },
  { src: '/login', text: '會員登入' },
  { src: '/reservation', text: '立即訂房' },
];

interface NavbarProps {
  hasBackground?: boolean;
  navbarListsShow?: boolean;
}

const Navbar = ({ hasBackground = false, navbarListsShow = true }: NavbarProps) => {
  const { palette } = useTheme();
  const appBarStyle = {
    boxShadow: 'none',
    '&.hasBackground': {
      backgroundColor: palette.neutral[100],
    },
    '.toolbar': {
      display: 'flex',
      padding: { xs: '16px 12px', md: '24px 80px' },
      transition: 'height 1.6s cubic-bezier(0.86, 0, 0.07, 1)',
    },
    '.logo': {
      flex: '0 0 auto',
      height: '72px',
    },
    '.navbarLists': {
      flexGrow: 0,
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      '&.navbarListsHide': {
        display: 'none',
      },
      '&.navbarListsShow': {
        display: 'flex',
      },
      '.link': {
        marginLeft: '16px',
        textDecoration: 'none',
        '.button': {
          color: 'white',
        },
        '&:first-child': {
          marginLeft: '0',
        },
      },
      '.reservation': {
        width: '128px',
        height: '56px',
        display: 'flex',
        padding: '16px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: palette.hotelPrimary[100],
        '.button': {
          width: '100%',
          height: '100%',
          padding: '0',
        },
      },
    },

    '.navMenuBackground': {
      opacity: 0,
      display: 'flex',
      backgroundColor: palette.neutral['bgcolor'],
      width: '48px',
      height: '48px',
      position: 'fixed',
      borderRadius: '50%',
      top: '28px',
      right: '12px',
      transition:
        'transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      '&.open': {
        opacity: 100,
        transform: 'scale(80)',
      },
    },
    '.navMenu': {
      display: { xs: 'flex', md: 'none' },
      position: { xs: 'fixed' },
      top: { xs: 0 },
      left: { xs: 0 },
      flexDirection: { xs: 'column' },
      justifyContent: { xs: 'space-between' },
      '&.open': {
        width: { xs: '100vw' },
        height: { xs: '100vh' },
      },
    },
    '.icon': {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 0,
      padding: 0,
      width: '48px',
      height: '48px',
      color: '#fff',
    },
    '.menu': {
      flex: '1 0 auto',
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
      opacity: 0,
      width: '0',
      transform: 'translateY(-50%)',
      transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      '&.open': {
        opacity: 1,
        width: '100%',
      },
      '.link': {
        width: { xs: '100%' },
        marginBottom: '16px',
        '&:last-child': {
          marginBottom: 0,
        },
      },
      '.button': {
        width: { xs: '100%' },
        height: { xs: '56px' },
      },
    },
  };
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const handleOpenNavMenu = () => {
    setShowNavMenu(true);
  };
  const handleCloseNavMenu = () => {
    setShowNavMenu(false);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={appBarStyle}
      className={`${hasBackground ? 'hasBackground' : ''}`}
    >
      <Toolbar className="toolbar">
        <Box className="logo">
          <Logo fill={palette.neutral[0]} />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }} />
        <Box className={`navbarLists ${navbarListsShow ? 'navbarListsShow' : 'navbarListsHide'}`}>
          {navbarLists.map(({ src, text }) => (
            <Link key={src} to={src} className={`link ${src.split('/')[1]}`}>
              <Button className="button">{text}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
      <Box>
        <Paper elevation={0} className={`navMenuBackground ${showNavMenu ? 'open' : ''}`} />
        <Box className={`navMenu ${showNavMenu ? 'open' : ''}`}>
          <IconButton
            size={showNavMenu ? 'large' : 'small'}
            onClick={showNavMenu ? handleCloseNavMenu : handleOpenNavMenu}
            color="inherit"
            className="icon"
          >
            <MenuIcon show={showNavMenu} />
          </IconButton>
          <Box className={`menu ${showNavMenu ? 'open' : ''}`}>
            {navbarLists.map(({ src, text }) => {
              if (src == '/reservation') {
                return (
                  <Link key={src} to={src} className={`link ${src.split('/')[1]}`}>
                    <Button className="button" variant="contained">
                      <Typography variant="body1">{text}</Typography>
                    </Button>
                  </Link>
                );
              }
              return (
                <Link key={src} to={src} className={`link ${src.split('/')[1]}`}>
                  <Button className="button">
                    <Typography variant="body1">{text}</Typography>
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
