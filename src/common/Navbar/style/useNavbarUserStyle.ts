import { useTheme } from '@mui/material';

const useNavbarUserStyle = () => {
  const { palette } = useTheme();
  const navbarUserStyle = {
    '.button': {
      color: palette.neutral[0],
      marginLeft: '16px',
      padding: '16px',
    },
    '.link': {
      textDecoration: 'none',
      color: 'white',
      '&:first-of-type': {
        marginLeft: '0',
      },
    },
  };
  return navbarUserStyle;
};

export default useNavbarUserStyle;
