import { Stack, Box, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
import RoomTitle from './RoomTitle';
import areaInfoImg from '@src/assets/images/areaInfo.svg';
import { MdBed, MdPerson } from 'react-icons/md';

type profileProps = {
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
};

const ProfileWrapper = styled(Box)(({ theme }) => ({
  width: '96px',
  height: '96px',
  backgroundColor: theme.palette.neutral[0],
  color: theme.palette.hotelPrimary[100],
  borderRadius: '1px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));

const RoomProfile = ({ areaInfo, bedInfo, maxPeople }: profileProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Stack spacing={isDesktop ? 3 : 2}>
      <RoomTitle title={'房型基本資訊'} />
      <Stack direction="row" spacing={2}>
        <ProfileWrapper>
          <img src={areaInfoImg} alt={'areaInfo'} />
          <Typography variant="Title_16px_B">{areaInfo}</Typography>
        </ProfileWrapper>
        <ProfileWrapper>
          <MdBed size="24" />
          <Typography variant="Title_16px_B">{bedInfo}</Typography>
        </ProfileWrapper>
        <ProfileWrapper>
          <MdPerson size="24" />
          <Typography variant="Title_16px_B">{maxPeople}</Typography>
        </ProfileWrapper>
      </Stack>
    </Stack>
  );
};

export default RoomProfile;
