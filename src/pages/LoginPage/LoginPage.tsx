import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PageContainer from '@src/common/LoginPageContainer';

const Heading = () => {
  const { palette } = useTheme();

  return (
    <Box mb={5}>
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
    <Box mt={5}>
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
  return (
    <PageContainer>
      <Heading />
      <LoginForm />
      <RegisterLink />
    </PageContainer>
  );
};

export default LoginPage;
