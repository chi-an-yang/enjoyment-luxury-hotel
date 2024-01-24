import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { userApi } from '@src/apis';
import HookFormInput from '@src/common/HookFormInput';
import Checkbox from '@src/ui-components/Checkbox';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const emailValidate = (value: string) => {
  if (value === '') return '此欄必填';
};

const passwordValidate = (value: string) => {
  if (value === '') return '此欄必填';

  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regex.test(value)) return '請輸入正確的密碼';
};

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { palette } = useTheme();
  const { handleSubmit, control } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useMutation({
    mutationFn: userApi.login,
  });

  const handleFormSubmit = handleSubmit(
    ({ email, password }) => {
      console.log({ email, password });
      login.mutate(
        { email, password },
        {
          onSuccess: (res) => {
            // TODO: 登入成功，登入資訊存 zustand
            console.log(res);

            // TODO: 如果有勾選記住帳號，就存到 localStorage
          },
          onError: (error) => {
            // TODO: 登入失敗，跳錯誤訊息
            let message = '登入失敗';

            if (axios.isAxiosError(error)) {
              message = error?.response?.data?.message;
            }

            console.log(message);
          },
        }
      );
    },
    (error) => {
      // TODO: 前端驗證失敗，跳錯誤訊息
      console.log(error);
    }
  );

  return (
    <Stack component="form" noValidate onSubmit={handleFormSubmit} gap={5}>
      <Stack gap={2} justifyContent={'center'}>
        <HookFormInput
          control={control}
          rules={{ validate: emailValidate }}
          name="email"
          labelStart="電子信箱"
          placeholder="hello@example.com"
        />
        <HookFormInput
          control={control}
          rules={{ validate: passwordValidate }}
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
          {/* 導頁去忘記密碼 */}
          <Link component={RouterLink} to={'/password'} variant="Title_16px_B">
            忘記密碼？
          </Link>
        </Stack>
      </Stack>
      <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
        會員登入
      </Button>
    </Stack>
  );
};

export default LoginForm;
