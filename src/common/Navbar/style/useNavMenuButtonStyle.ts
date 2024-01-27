import { useTheme } from '@mui/material';

const useNavMenuButtonStyle = () => {
  const { palette } = useTheme();
  const navMenuButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 0,
    padding: 0,
    width: '48px',
    height: '48px',
    color: palette.neutral[0],
  };
  return navMenuButtonStyle;
};

export default useNavMenuButtonStyle;
