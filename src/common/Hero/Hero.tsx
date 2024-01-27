import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import MemberHero from '@src/assets/images/member-hero.png';
import Avatar01 from '@src/assets/icons/avatar01.svg?react';
import Avatar02 from '@src/assets/icons/avatar02.svg?react';
import Avatar03 from '@src/assets/icons/avatar03.svg?react';
import Avatar04 from '@src/assets/icons/avatar04.svg?react';
import Avatar05 from '@src/assets/icons/avatar05.svg?react';
import Avatar06 from '@src/assets/icons/avatar06.svg?react';

const avatarComponents = [Avatar01, Avatar02, Avatar03, Avatar04, Avatar05, Avatar06];

const RandomIcon = () => {
  const { breakpoints } = useTheme();
  const isMediumOrLarger = useMediaQuery(breakpoints.up('md'));
  const Icon = avatarComponents[Math.floor(Math.random() * avatarComponents.length)];
  const MobileIcon = () => {
    return (
      <Box
        sx={{
          width: '72px',
          height: '72px',
        }}
      >
        <Icon style={{ width: '100%', height: '100%' }} />
      </Box>
    );
  };
  const DesktopIcon = () => {
    return (
      <Box
        sx={{
          width: '144px',
          height: '144px',
        }}
      >
        <Icon style={{ width: '100%', height: '100%' }} />
      </Box>
    );
  };
  return isMediumOrLarger ? <DesktopIcon /> : <MobileIcon />;
};

const HeroTitle = ({ username }: { username: string }) => {
  const { breakpoints, palette } = useTheme();
  const isMediumOrLarger = useMediaQuery(breakpoints.up('md'));
  const MobileTitle = () => {
    return (
      <Typography
        sx={{
          color: palette.neutral['0'],
          mt: 2,
          ml: 0,
        }}
        variant="H3_32px_B"
      >
        Hello，{username}
      </Typography>
    );
  };
  const DesktopTitle = () => {
    return (
      <Typography
        sx={{
          color: palette.neutral['0'],
          mt: 0,
          ml: 3,
        }}
        variant="H1_48px_B"
      >
        Hello，{username}
      </Typography>
    );
  };
  return isMediumOrLarger ? <DesktopTitle /> : <MobileTitle />;
};
const Hero = () => {
  const username: string = '六角測試專員'; // TODO:之後資料來源替換成 Zustand
  return (
    <Grid container component="main" sx={{ width: '100vw', height: '384px' }}>
      <Grid
        item
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${MemberHero})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: { xs: 'flex-start', md: 'center' },
          padding: { xs: '0 20px', md: '0 16.25%' },
        }}
      >
        <RandomIcon />
        <HeroTitle username={username} />
      </Grid>
    </Grid>
  );
};
export default Hero;
