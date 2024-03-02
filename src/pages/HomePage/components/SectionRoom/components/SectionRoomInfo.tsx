import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Theme, Box, useTheme, useMediaQuery } from '@mui/material';

type SectionRoomInfoProps = {
  name: string;
  description: string;
  price: number;
};

const SectionRoomInfoDesktop = ({ name, description, price }: SectionRoomInfoProps) => {
  const { palette } = useTheme();
  return (
    <>
      <Typography variant="H2_40px_B" component={'h2'} color={palette.neutral[0]} mb={2}>
        {name}
      </Typography>
      <Typography variant="Body_16px_R" color={palette.neutral[0]} mb={5}>
        {description}
      </Typography>
      <Typography variant="H3_32px_B" color={palette.neutral[0]} mb={5}>
        NT$ {price.toLocaleString()}
      </Typography>

      <Link component={RouterLink} to={'/rooms'} width={'100%'} maxWidth={'628px'} underline="none">
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          width={'100%'}
          height={'116px'}
          borderRadius={'8px'}
          padding={'40px'}
          mb={5}
          sx={{
            transition: 'all .3s',
            cursor: 'pointer',
            backgroundColor: (theme: Theme) => `${theme.palette.neutral[0]}`,
            color: (theme: Theme) => theme.palette.neutral[100],
            '&:hover': {
              backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[100],
              color: (theme: Theme) => theme.palette.neutral[0],
              '> div': {
                backgroundColor: (theme: Theme) => theme.palette.neutral[0],
              },
            },
          }}
        >
          <Typography
            variant="H5_24px_B"
            sx={{
              color: 'inherit',
            }}
          >
            查看更多
          </Typography>
          <Box
            display={'flex'}
            width={'150px'}
            height={'1px'}
            ml={2}
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.neutral[100],
            }}
          />
        </Box>
      </Link>
    </>
  );
};

const SectionRoomInfoMobile = ({ name, description, price }: SectionRoomInfoProps) => {
  const { palette } = useTheme();
  return (
    <>
      <Typography variant="H4_28px_B" component={'h4'} color={palette.neutral[0]} mb={2}>
        {name}
      </Typography>
      <Typography variant="Body2_14px_R" color={palette.neutral[0]} mb={3} height={42}>
        {description}
      </Typography>
      <Typography variant="Body_16px_R" color={palette.neutral[0]} mb={3}>
        NT$ {price.toLocaleString()}
      </Typography>
      <Link component={RouterLink} to={'/rooms'} width={'100%'} maxWidth={'351px'} underline="none">
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          width={'100%'}
          height={'64px'}
          borderRadius={'8px'}
          padding={'20px'}
          mb={3}
          sx={{
            transition: 'all .3s',
            cursor: 'pointer',
            backgroundColor: (theme: Theme) => `${theme.palette.neutral[0]}`,
            color: (theme: Theme) => theme.palette.neutral[100],
            '&:hover': {
              backgroundColor: (theme: Theme) => theme.palette.hotelPrimary[100],
              color: (theme: Theme) => theme.palette.neutral[0],
              '> div': {
                backgroundColor: (theme: Theme) => theme.palette.neutral[0],
              },
            },
          }}
        >
          <Typography
            variant="Body_16px_R"
            sx={{
              color: 'inherit',
            }}
          >
            查看更多
          </Typography>
          <Box
            display={'flex'}
            width={'80px'}
            height={'1px'}
            ml={2}
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.neutral[100],
            }}
          />
        </Box>
      </Link>
    </>
  );
};

const SectionRoomInfo = (data: SectionRoomInfoProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionRoomInfoDesktop {...data} /> : <SectionRoomInfoMobile {...data} />;
};

export default SectionRoomInfo;
