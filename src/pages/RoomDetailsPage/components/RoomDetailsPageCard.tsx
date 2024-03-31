import { Box, Card, CardActions, CardContent, Button, Typography, useTheme } from '@mui/material';
import RoomCalendar from './RoomCalendar';
import RoomPeopleCount from './RoomPeopleCount';

const RoomDetailsPageCard = () => {
  const { palette } = useTheme();

  return (
    <Card sx={{ maxWidth: 478, height: 620, borderRadius: '20px', p: 5 }}>
      <CardContent sx={{ p: 0 }}>
        <Box borderBottom={`1px solid ${palette.neutral[40]}`} pb={2} mb={5}>
          <Typography variant="H5_24px_B" component={'h5'}>
            預訂房型
          </Typography>
        </Box>
        <Typography variant="H2_40px_B" component={'h2'} mb={1}>
          尊爵雙人房
        </Typography>
        <Typography variant="Body_16px_R" component={'p'} mb={5}>
          享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
        </Typography>
        <RoomCalendar />
        <RoomPeopleCount peopleNum={2} /> {/* 人數請默認帶 2 */}
        <Typography variant="H5_24px_B" component={'p'} color={palette.hotelPrimary[100]} mb={5}>
          NT$ 10,000
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ width: '100%', height: '56px' }}>
          立即預訂
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomDetailsPageCard;
