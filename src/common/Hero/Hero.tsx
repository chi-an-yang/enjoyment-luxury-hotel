import { Box, Grid, Typography } from '@mui/material';
import MemberHero from '@src/assets/images/member-hero.png';
import Avatar01 from '@src/assets/icons/avatar01.svg?react';
import Avatar02 from '@src/assets/icons/avatar02.svg?react';
import Avatar03 from '@src/assets/icons/avatar03.svg?react';
import Avatar04 from '@src/assets/icons/avatar04.svg?react';
import Avatar05 from '@src/assets/icons/avatar05.svg?react';
import Avatar06 from '@src/assets/icons/avatar06.svg?react';

const avatarComponents = [Avatar01, Avatar02, Avatar03, Avatar04, Avatar05, Avatar06];

const RandomIcon = () => {
  const Icon = avatarComponents[Math.floor(Math.random() * avatarComponents.length)];
  return (
    <Box
      sx={{
        width: { xs: '72px', md: '144px' },
        height: { xs: '72px', md: '144px' },
      }}
    >
      <Icon style={{ width: '100%', height: '100%' }} />
    </Box>
  );
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
        <Typography
          sx={{
            color: '#fff',
            mt: { xs: 2, md: 0 },
            ml: { xs: 0, md: 3 },
            fontSize: { xs: '32px', md: '48px' },
          }}
        >
          Hello，{username}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Hero;
