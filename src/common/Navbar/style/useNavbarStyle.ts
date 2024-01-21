import { useTheme } from '@mui/material';

const useNavbarStyle = () => {
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
    '.navbarListsHide': {
      display: 'none',
    },
    '.navbarListShow': {
      display: 'flex',
    },
    '.navbarLists': {
      flexGrow: 0,
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      '.link': {
        textDecoration: 'none',
        color: 'white',
        '&:first-child': {
          marginLeft: '0',
        },
      },
      '.button': {
        color: 'white',
        marginLeft: '16px',
        padding: '16px',
        '&.reservation': {
          width: '128px',
          height: '56px',
          display: 'flex',
          padding: '16px 32px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
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
      color: palette.neutral[0],
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
      '.button': {
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
      },
      '.link': {
        width: { xs: '100%' },
        color: palette.neutral[0],
        textDecoration: 'none',
      },
    },
    '.userWrapper': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  return appBarStyle;
};

export default useNavbarStyle;
