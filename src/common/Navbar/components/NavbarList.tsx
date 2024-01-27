import Link from '@mui/material/Link';
import { useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import NavbarUser from './NavbarUser';
import useNavbarListStyle from '../style/useNavbarListStyle';

const NavbarList = () => {
  const { palette } = useTheme();
  const navbarListStyle = useNavbarListStyle();
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand

  const NavbarListItem = ({
    url,
    variant = 'text',
    name,
  }: {
    url: string;
    variant?: 'text' | 'contained' | 'outlined';
    name: string;
  }) => {
    return (
      <Button
        sx={{ color: palette.neutral[0], marginLeft: '16px', padding: '16px' }}
        className={url}
        variant={variant}
      >
        <Link
          sx={{
            textDecoration: 'none',
            color: 'white',
            '&:first-of-type': {
              marginLeft: '0',
            },
          }}
          component={RouterLink}
          to={`/${url}`}
        >
          {name}
        </Link>
      </Button>
    );
  };

  return (
    <Box sx={navbarListStyle}>
      <NavbarListItem url="rooms" name="客房旅館" />
      <NavbarUser username={username} />
      <NavbarListItem url="reservation" variant="contained" name="立即訂房" />
    </Box>
  );
};

export default NavbarList;
