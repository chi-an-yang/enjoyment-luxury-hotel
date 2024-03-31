import { ReactNode } from 'react';

import { Box, useTheme, useMediaQuery } from '@mui/material';
import RoomTitle from './RoomTitle';
import RoomInfoTitle from './RoomInfoTitle';
import isProvideImg from '@src/assets/images/isProvide.png';

type titleProps = 'layoutInfo' | 'facilityInfo' | 'amenityInfo';
type infoProps = {
  title: titleProps;
  infos: string[];
};

const titleMap = {
  layoutInfo: '房間格局',
  facilityInfo: '房內設備',
  amenityInfo: '備品提供',
};

const getInfoTitle = (title: titleProps) => {
  return titleMap[title];
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

// TODO infos should be filter isProvide then return string[]
const RoomInfo = ({ title, infos }: infoProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Box display={'flex'} gap={isDesktop ? 3 : 2} flexDirection={'column'}>
      <RoomTitle title={getInfoTitle(title)} />
      <InfoWrapper>
        {infos.map((info) => (
          <Box
            key={info}
            gap={1}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mr={4}
          >
            <img src={isProvideImg} alt={'isProvide'} />
            <Box width={'64px'}>
              <RoomInfoTitle>{info}</RoomInfoTitle>
            </Box>
          </Box>
        ))}
      </InfoWrapper>
    </Box>
  );
};

export default RoomInfo;
