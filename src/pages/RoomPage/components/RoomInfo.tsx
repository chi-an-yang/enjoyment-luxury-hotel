import { ReactNode } from 'react';
import { Info } from '@src/apis/home';
import { Box, Typography, useTheme } from '@mui/material';
import RoomTitle from './RoomTitle';
import RoomInfoBasicImage from './RoomInfoBasicImage';

type titleProps = 'layoutInfo' | 'facilityInfo' | 'amenityInfo';
type infoProps = {
  title: titleProps;
  infos: Info[];
};

const getInfoTitle = (title: titleProps) => {
  switch (title) {
    case 'layoutInfo':
      return '房間格局';
    case 'facilityInfo':
      return '房內設備';
    case 'amenityInfo':
      return '備品提供';
  }
};

const InfoWrapper = ({ children }: { children: ReactNode }) => {
  const { palette } = useTheme();
  return (
    <Box
      width={'100%'}
      maxWidth={'746px'}
      height={'auto'}
      bgcolor={palette.neutral[0]}
      borderRadius={1}
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      p={3}
    >
      <Box
        width={'auto'}
        minHeight={'24px'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        flexWrap={'wrap'}
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
};

const RoomInfo = ({ title, infos }: infoProps) => {
  return (
    <Box display={'flex'} gap={3} flexDirection={'column'}>
      <RoomTitle title={getInfoTitle(title)} />
      <InfoWrapper>
        {infos
          .filter((info) => info.isProvide)
          .map((info) => (
            <Box gap={1} display={'flex'} justifyContent={'center'} alignItems={'center'} mr={4}>
              <RoomInfoBasicImage type={'isProvide'} />
              <Box width={'64px'}>
                <Typography variant="Title_16px_B">{info.title}</Typography>
              </Box>
            </Box>
          ))}
      </InfoWrapper>
    </Box>
  );
};

export default RoomInfo;
