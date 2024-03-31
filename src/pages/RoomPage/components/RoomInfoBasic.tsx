import { ReactNode } from 'react';
import { Stack, Box, Typography, useTheme } from '@mui/material';
import RoomTitle from './RoomTitle';
import areaInfoImg from '@src/assets/images/areaInfo.png';
import bedInfoImg from '@src/assets/images/bedInfo.png';
import maxPeopleImg from '@src/assets/images/maxPeople.png';

type basicProps = {
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
};

const BasicInfoWrapper = ({ children }: { children: ReactNode }) => {
  const { palette } = useTheme();
  return (
    <Box
      width={'96px'}
      height={'96px'}
      bgcolor={palette.neutral[0]}
      borderRadius={1}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      p={2}
    >
      <Box
        width={'64px'}
        height={'64px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexDirection="column"
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
};

const RoomInfoBasic = ({ areaInfo, bedInfo, maxPeople }: basicProps) => {
  return (
    <>
      <RoomTitle title={'房型基本資訊'} />
      <Stack direction="row" spacing={1}>
        <BasicInfoWrapper>
          <img src={areaInfoImg} alt={'areaInfo'} />
          <Typography variant="Title_16px_B">{areaInfo}</Typography>
        </BasicInfoWrapper>
        <BasicInfoWrapper>
          <img src={bedInfoImg} alt={'bedInfo'} />
          <Typography variant="Title_16px_B">{bedInfo}</Typography>
        </BasicInfoWrapper>
        <BasicInfoWrapper>
          <img src={maxPeopleImg} alt={'maxPeople'} />
          <Typography variant="Title_16px_B">{maxPeople}</Typography>
        </BasicInfoWrapper>
      </Stack>
    </>
  );
};

export default RoomInfoBasic;
