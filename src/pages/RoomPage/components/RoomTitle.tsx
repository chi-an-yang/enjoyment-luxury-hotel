import { Box, Typography, useTheme, useMediaQuery, styled } from '@mui/material';
const RoomTitle = ({ title }: { title: string }) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  const RoomTitleWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    pl: 2,
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: '4px',
      height: '24px',
      borderRadius: '10px',
      bgcolor: theme.palette.hotelPrimary[100],
    },
  }));

  return (
    <RoomTitleWrapper>
      <Typography variant={isDesktop ? 'H5_24px_B' : 'Title_16px_B'}>{title}</Typography>
    </RoomTitleWrapper>
  );
};

export default RoomTitle;
