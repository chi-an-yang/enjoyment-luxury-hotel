import { Stack, Box, Typography, styled } from '@mui/material';
import RoomTitle from './RoomTitle';
import areaInfoImg from '@src/assets/images/areaInfo.png';
import bedInfoImg from '@src/assets/images/bedInfo.png';
import maxPeopleImg from '@src/assets/images/maxPeople.png';

type profileProps = {
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
};

const ProfileWrapper = styled(Box)(({ theme }) => ({
  width: '96px',
  height: '96px',
  backgroundColor: theme.palette.neutral[0],
  borderRadius: '1px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));

const RoomProfile = ({ areaInfo, bedInfo, maxPeople }: profileProps) => {
  return (
    <>
      <RoomTitle title={'房型基本資訊'} />
      <Stack direction="row" spacing={2}>
        <ProfileWrapper>
          <img src={areaInfoImg} alt={'areaInfo'} />
          <Typography variant="Title_16px_B">{areaInfo}</Typography>
        </ProfileWrapper>
        <ProfileWrapper>
          <img src={bedInfoImg} alt={'bedInfo'} />
          <Typography variant="Title_16px_B">{bedInfo}</Typography>
        </ProfileWrapper>
        <ProfileWrapper>
          <img src={maxPeopleImg} alt={'maxPeople'} />
          <Typography variant="Title_16px_B">{maxPeople}</Typography>
        </ProfileWrapper>
      </Stack>
    </>
  );
};

export default RoomProfile;
