import Grid from '@mui/material/Grid';
import registerImageUrl from '@src/assets/images/register.png';
import lineBgUrl from '@src/assets/images/Line.png';
import lineMBgUrl from '@src/assets/images/Line-m.png';
import useTheme from '@mui/material/styles/useTheme';
import { ReactNode } from 'react';
import Navbar from '@src/common/Navbar';

const registerBg = {
  backgroundImage: `url(${registerImageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const lineBg = {
  '&:before': {
    content: `""`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: { md: `url(${lineBgUrl})`, xs: `url(${lineMBgUrl})` },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: { md: 'center 192px', xs: 'center 104px' },
    opacity: 0.4,
    pointerEvents: 'none',
  },
};

type Props = {
  children: ReactNode;
};

const LoginPageContainer = ({ children }: Props) => {
  const { palette } = useTheme();

  return (
    <Grid
      container
      component="main"
      justifyContent={'center'}
      direction={'column'}
      sx={{ minHeight: '100vh', height: '100%', bgcolor: palette.neutral.bgcolor }}
    >
      <Navbar hasBackground navbarListShow={false} />
      <Grid container maxWidth={'1920px'} flex={'1 0 auto'}>
        <Grid item xs={false} sm={4} md={6} sx={registerBg} />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          display={'flex'}
          justifyContent={'center'}
          position={'relative'}
          sx={lineBg}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPageContainer;
