import { Grid, Stack, useTheme, Typography } from '@mui/material';

const RoomDetailsPageCalendar = () => {
  const { palette } = useTheme();
  return (
    <Grid container width={'398px'} height={'74px'} gap={'8px'} mb={2}>
      <Stack
        flex={'1 0 auto'}
        height={'100%'}
        border={`1px solid ${palette.neutral[100]}`}
        borderRadius={2}
        p={2}
      >
        <Typography variant="Tiny_12px_R">入住</Typography>
      </Stack>
      <Stack
        flex={'1 0 auto'}
        height={'100%'}
        border={`1px solid ${palette.neutral[100]}`}
        borderRadius={2}
        p={2}
      >
        <Typography variant="Tiny_12px_R">退房</Typography>
      </Stack>
    </Grid>
  );
};

export default RoomDetailsPageCalendar;
