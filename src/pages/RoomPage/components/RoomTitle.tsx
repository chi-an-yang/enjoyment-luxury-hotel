import { Box, Typography, useTheme } from '@mui/material';
const RoomTitle = ({ title }: { title: string }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
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
          bgcolor: palette.hotelPrimary[100],
        },
      }}
    >
      <Typography variant="H5_24px_B">{title}</Typography>
    </Box>
  );
};

export default RoomTitle;
