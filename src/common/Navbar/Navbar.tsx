import { useState } from 'react';
import { Box, IconButton, Toolbar, useTheme, AppBar, Paper } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MdMenu, MdClose } from 'react-icons/md';
import Logo from '@src/assets/logo.svg?react';
import NavbarList from './components/NavbarList';
import NavMenuList from './components/NavMenuList';

interface NavbarProps {
  hasBackground?: boolean;
  navbarListShow?: boolean;
}

const navMenuButtonStyle = {
  position: 'fixed',
  top: { xs: '16px', md: '20px' },
  right: { xs: '12px', md: '20px' },
  zIndex: 0,
  padding: 0,
  width: { xs: '40px', md: '48px' },
  height: { xs: '40px', md: '48px' },
  color: (theme: Theme) => theme.palette.neutral[0],
};

const NavMenuCloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton size="large" onClick={onClick} color="inherit" sx={navMenuButtonStyle}>
      <MdClose size="48" />
    </IconButton>
  );
};
const NavMenuOpenButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton size="small" onClick={onClick} color="inherit" sx={navMenuButtonStyle}>
      <MdMenu />
    </IconButton>
  );
};

const Navbar = ({ hasBackground = false, navbarListShow = true }: NavbarProps) => {
  const { palette } = useTheme();
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  const handleNavMenuClose = () => {
    setShowNavMenu(false);
  };

  const handleNavMenuOpen = () => {
    setShowNavMenu(true);
  };

  const NavMenuButton = () => {
    if (showNavMenu) return <NavMenuCloseButton onClick={handleNavMenuClose} />;
    return <NavMenuOpenButton onClick={handleNavMenuOpen} />;
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        height: { xs: '72px', md: '120px' },
      }}
      className={hasBackground ? 'hasBackground' : ''}
    >
      <Toolbar
        sx={{
          display: 'flex',
          padding: { xs: '16px 12px', md: '24px 80px' },
          transition: 'height 1.6s cubic-bezier(0.86, 0, 0.07, 1)',
        }}
      >
        <Box sx={{ flex: '0 0 auto', height: { xs: '40px', md: '72px' } }}>
          <Logo fill={palette.neutral[0]} width={'100%'} height={'100%'} />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }} />
        <Box sx={{ display: navbarListShow ? 'flex' : 'none' }}>
          <NavbarList />
        </Box>
      </Toolbar>
      <Box>
        <Paper
          sx={{
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
          }}
          elevation={0}
          className={showNavMenu ? 'open' : ''}
        />
        <Box
          sx={{
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
          }}
          className={showNavMenu ? 'open' : ''}
        >
          <NavMenuButton />
          <NavMenuList showNavMenu={showNavMenu} />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
