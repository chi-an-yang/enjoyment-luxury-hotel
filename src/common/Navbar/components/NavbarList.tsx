import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, ButtonOwnProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import NavbarUser from './NavbarUser';

const NavbarListItem = ({
  className,
  url,
  variant = 'text',
  name,
}: {
  className: string;
  url: string;
  variant?: ButtonOwnProps['variant'];
  name: string;
}) => {
  return (
    <Button
      sx={{
        color: (theme: Theme) => theme.palette.neutral[0],
        marginLeft: '16px',
        padding: '16px',
      }}
      className={className}
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
        to={url}
      >
        {name}
      </Link>
    </Button>
  );
};
const NavbarList = () => {
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        '.reservation': {
          width: '128px',
          height: '56px',
        },
      }}
    >
      <NavbarListItem className="rooms" url="/rooms" name="客房旅館" />
      <NavbarUser username={username} />
      <NavbarListItem
        className="reservation"
        url="/reservation"
        variant="contained"
        name="立即訂房"
      />
    </Box>
  );
};

export default NavbarList;
