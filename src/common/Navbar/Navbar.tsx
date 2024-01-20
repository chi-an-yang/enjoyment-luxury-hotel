import { useState } from 'react';
import { Box, IconButton, Toolbar, useTheme, AppBar, Paper } from '@mui/material';
import { MdMenu, MdClose } from 'react-icons/md';
import useAppBarStyle from './useAppBarStyle';
import Logo from '@src/assets/logo.svg?react';
import { NavbarList, NavMenuList } from './NavbarList';

interface NavbarProps {
  hasBackground?: boolean;
  navbarListShow?: boolean;
}

const Navbar = ({ hasBackground = false, navbarListShow = true }: NavbarProps) => {
  const { palette } = useTheme();
  const appBarStyle = useAppBarStyle();
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  const handleNavMenuClose = () => {
    setShowNavMenu(false);
  };
  const NavMenuCloseButton = () => {
    return (
      <IconButton size="large" onClick={handleNavMenuClose} color="inherit" className="icon">
        <MdClose size="large" />
      </IconButton>
    );
  };

  const handleNavMenuOpen = () => {
    setShowNavMenu(true);
  };
  const NavMenuOpenButton = () => {
    return (
      <IconButton size="small" onClick={handleNavMenuOpen} color="inherit" className="icon">
        <MdMenu />
      </IconButton>
    );
  };

  const NavMenuButton = showNavMenu ? NavMenuCloseButton : NavMenuOpenButton;

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
        <Box className={`${navbarListShow ? 'navbarListShow' : 'navbarListsHide'}`}>
          <NavbarList />
        </Box>
      </Toolbar>
      <Box>
        <Paper elevation={0} className={`navMenuBackground ${showNavMenu ? 'open' : ''}`} />
        <Box className={`navMenu ${showNavMenu ? 'open' : ''}`}>
          <NavMenuButton />
          <Box className={`menu ${showNavMenu ? 'open' : ''}`}>
            <NavMenuList />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
