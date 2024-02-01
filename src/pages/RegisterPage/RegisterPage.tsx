import { Box, Link, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PageContainer from '@src/common/LoginPageContainer';
import RegisterForm from './components/RegisterForm';

const Heading = () => {
  const { palette } = useTheme();

  return (
    <Box mb={4}>
      <Typography component="p" variant="Subtitle_14px_B" color={palette.hotelPrimary[100]}>
        享樂酒店，誠摯歡迎
      </Typography>
      <Typography component="h3" variant="H3_32px_B" color={palette.neutral[0]} mt={1}>
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
      <Heading />
      <RegisterForm />
      <LoginLink />
    </PageContainer>
  );
};

export default RegisterPage;
