// 官網的範例頁面，從這個佈局開始改
// [DEMO](https://mui.com/material-ui/getting-started/templates/sign-in-side/)
// [Source code](https://github.com/mui/material-ui/blob/v5.15.3/docs/data/material/getting-started/templates/sign-in-side/SignInSide.tsx)

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack, useTheme } from '@mui/material';
import registerImageUrl from '@src/assets/images/register.png';
import lineBgUrl from '@src/assets/images/Line.png';
import { Link as RouterLink } from 'react-router-dom';
import LoginForm from './components/LoginForm';

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

const Heading = () => {
  const { palette } = useTheme();

  return (
    <Box>
      <Typography component="p" variant="Subtitle_14px_B" color={palette.hotelPrimary[100]}>
        享樂酒店，誠摯歡迎
      </Typography>
      <Typography component="h3" variant="H3_32px_B" color={palette.neutral[0]} mt={1}>
        立即開始旅程
      </Typography>
    </Box>
  );
};

const RegisterLink = () => {
  const { palette } = useTheme();

  return (
    <Box>
      <Typography component={'span'} color={palette.neutral[0]} mr={1}>
        沒有會員嗎？
      </Typography>
      {/* 導頁去註冊頁 */}
      <Link component={RouterLink} to={'/register'} variant="Title_16px_B">
        前往註冊
      </Link>
    </Box>
  );
};

const LoginPage = () => {
  const { palette } = useTheme();

  return (
    <Grid container component="main" sx={{ height: '100vh', bgcolor: palette.neutral.bgcolor }}>
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
        <Stack mx={2.5} justifyContent={'center'} height={'100%'} width={'414px'} gap={5}>
          <Heading />
          <LoginForm />
          <RegisterLink />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
