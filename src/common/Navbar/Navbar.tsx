import { useState } from 'react';
import { Box, IconButton, Toolbar, useTheme, AppBar, Paper } from '@mui/material';
import { MdMenu, MdClose } from 'react-icons/md';
import useNavbarStyle from './style/useNavbarStyle';
import useNavMenuButtonStyle from './style/useNavMenuButtonStyle';
import Logo from '@src/assets/logo.svg?react';
import NavbarList from './components/NavbarList';
import NavMenuList from './components/NavMenuList';

interface NavbarProps {
  hasBackground?: boolean;
  navbarListShow?: boolean;
}

const Navbar = ({ hasBackground = false, navbarListShow = true }: NavbarProps) => {
  const { palette } = useTheme();
  const navbarStyle = useNavbarStyle();
  const navMenuButtonStyle = useNavMenuButtonStyle();
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const handleNavMenuClose = () => {
    setShowNavMenu(false);
  };
  const NavMenuCloseButton = () => {
    return (
      <IconButton size="large" onClick={handleNavMenuClose} color="inherit" sx={navMenuButtonStyle}>
        <MdClose size="48" />
      </IconButton>
    );
  };

  const handleNavMenuOpen = () => {
    setShowNavMenu(true);
  };
  const NavMenuOpenButton = () => {
    return (
      <IconButton size="small" onClick={handleNavMenuOpen} color="inherit" sx={navMenuButtonStyle}>
        <MdMenu />
      </IconButton>
    );
  };

  const NavMenuButton = showNavMenu ? NavMenuCloseButton : NavMenuOpenButton;
  // transparent
  return (
    <AppBar
      position="sticky"
      color="info"
      sx={navbarStyle}
      className={`${hasBackground ? 'hasBackground' : ''}`}
    >
      <Toolbar
        sx={{
          display: 'flex',
          padding: { xs: '16px 12px', md: '24px 80px' },
          transition: 'height 1.6s cubic-bezier(0.86, 0, 0.07, 1)',
        }}
      >
        <Box sx={{ flex: '0 0 auto', height: '72px' }}>
          <Logo fill={palette.neutral[0]} />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }} />
        <Box sx={{ display: navbarListShow ? 'flex' : 'none' }}>
          <NavbarList />
        </Box>
      </Toolbar>
      <Box>
        <Paper elevation={0} className={`navMenuBackground ${showNavMenu ? 'open' : ''}`} />
        <Box className={`navMenu ${showNavMenu ? 'open' : ''}`}>
          <NavMenuButton />
          <NavMenuList showNavMenu={showNavMenu} />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
