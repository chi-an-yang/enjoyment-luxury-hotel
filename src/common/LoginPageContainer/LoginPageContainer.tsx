import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import registerImageUrl from '@src/assets/images/register.png';
import lineBgUrl from '@src/assets/images/Line.png';
import useTheme from '@mui/material/styles/useTheme';
import { ReactNode } from 'react';

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
    backgroundImage: `url(${lineBgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center 21%',
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
    <Grid container component="main" sx={{ minHeight: '100vh', height: '100%', bgcolor: palette.neutral.bgcolor }}>
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
        <Stack mx={2.5} justifyContent={'center'} height={'100%'} width={'414px'}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginPageContainer;
