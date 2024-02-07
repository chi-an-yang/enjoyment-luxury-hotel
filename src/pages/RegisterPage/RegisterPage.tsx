import { Box, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PageContainer from '@src/common/LoginPageContainer';
import RegisterForm from './components/RegisterForm';

const Heading = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  return (
    <Box mb={4}>
      <Typography
        component="p"
        variant={isDesktop ? 'Title_16px_B' : 'Subtitle_14px_B'}
        color={palette.hotelPrimary[100]}
      >
        享樂酒店，誠摯歡迎
      </Typography>
      <Typography
        component="h3"
        variant={isDesktop ? 'H1_48px_B' : 'H3_32px_B'}
        color={palette.neutral[0]}
        mt={1}
      >
        立即註冊
      </Typography>
    </Box>
  );
};

const LoginLink = () => {
  const { palette } = useTheme();

  return (
    <Box mt={2}>
      <Typography component={'span'} color={palette.neutral[0]} mr={1}>
        已經有會員了嗎？
      </Typography>
      {/* 導頁去註冊頁 */}
      <Link component={RouterLink} to={'/register'} variant="Title_16px_B">
        立即登入
      </Link>
    </Box>
  );
};

const RegisterPage = () => {
  return (
    <PageContainer>
      <Stack
        mx={2.5}
        py={{xs: '94px', sm: '80px'}}
        justifyContent={{xs: 'flex-start', md: 'center'}}
        height={'100%'}
        width={'414px'}
      >
        <Heading />
        <RegisterForm />
        <LoginLink />
      </Stack>
    </PageContainer>
  );
};

export default RegisterPage;
