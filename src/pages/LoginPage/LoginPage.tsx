// 官網的範例頁面，從這個佈局開始改
// [DEMO](https://mui.com/material-ui/getting-started/templates/sign-in-side/)
// [Source code](https://github.com/mui/material-ui/blob/v5.15.3/docs/data/material/getting-started/templates/sign-in-side/SignInSide.tsx)

import * as React from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack, useTheme } from '@mui/material';
import registerImageUrl from '@src/assets/images/register.png';
import lineBgUrl from '@src/assets/images/Line.png';
import InputField from '@src/ui-components/InputField';
import Checkbox from '@src/ui-components/Checkbox';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@src/apis';

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
      {/* TODO: 導頁去註冊 */}
      <Link href="#" variant="Title_16px_B">
        前往註冊
      </Link>
    </Box>
  );
};

const LoginPage = () => {
  const { palette } = useTheme();

  const login = useMutation({
    mutationFn: userApi.login,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (email && password) {
      login.mutate(
        { email, password },
        {
          onSuccess: (res) => {
            // TODO: 登入成功，記錄使用者資訊
            console.log(res);
          },
          onError: (err) => {
            // TODO: 登入失敗，跳錯誤訊息
            console.log(err);
          },
        }
      );
    } else {
      // TODO: 跳錯誤訊息
      console.log('請正確輸入帳號密碼');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', bgcolor: palette.neutral.bgcolor }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${registerImageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        display={'flex'}
        justifyContent={'center'}
        sx={{
          backgroundImage: `url(${lineBgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'left 20%',
        }}
      >
        <Stack mx={2.5} justifyContent={'center'} height={'100%'} width={'414px'} gap={5}>
          <Heading />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            gap={5}
            display={'flex'}
            flexDirection={'column'}
          >
            <Stack gap={2} justifyContent={'center'}>
              <InputField name="email" labelStart="電子信箱" placeholder="hello@example.com" />
              <InputField
                name="password"
                labelStart="密碼"
                placeholder="請輸入密碼"
                type="password"
              />
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  slotProps={{ typography: { variant: 'Title_16px_B', color: palette.neutral[0] } }}
                  label="記住帳號"
                />
                {/* TODO: 導頁去忘記密碼 */}
                <Link href="#" variant="Title_16px_B">
                  忘記密碼？
                </Link>
              </Stack>
            </Stack>
            <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
              會員登入
            </Button>
            <RegisterLink />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
