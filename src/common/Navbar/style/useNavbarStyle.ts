import { useTheme } from '@mui/material';

const useNavbarStyle = () => {
  const { palette } = useTheme();
  const navbarStyle = {
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
  };
  return navbarStyle;
};

export default useNavbarStyle;
