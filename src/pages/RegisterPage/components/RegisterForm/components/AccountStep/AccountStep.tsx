import { Stack, Button } from '@mui/material';
import HookFormInput from '@src/common/HookFormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRegisterFormStore } from '../../store/useRegisterFormStore';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface AccountStepFormValues {
  email: string;
  password: string;
  validPassword: string;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().email('請輸入有效的電子郵件地址').required('此欄必填'),
    password: yup
      .string()
      .max(128, '密碼過長')
      .min(8, '密碼過短，需超過 8 字元')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, '請輸入包含英文及數字的組合')
      .required('此欄必填'),
    validPassword: yup
      .string()
      .oneOf([yup.ref('password')], '密碼輸入錯誤')
      .required('此欄必填'),
  })
  .required();

type AccountStepProps = {
  onSubmit: () => void;
};

const AccountStep = ({ onSubmit }: AccountStepProps) => {
  // 從 zustand 取得表單資料當預設值
  const setAccountData = useRegisterFormStore((state) => state.setAccountData);
  const { email, password, validPassword } = useRegisterFormStore((state) => state.submitData);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email,
      password,
      validPassword,
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleFormSubmit: SubmitHandler<AccountStepFormValues> = (data) => {
    // 把資料存到 zustand
    setAccountData(data);
    onSubmit();
  };

  return (
    <Stack component={'form'} gap={2} onSubmit={handleSubmit(handleFormSubmit)}>
      <HookFormInput
        control={control}
        name="email"
        labelStart="電子信箱"
        placeholder="hello@example.com"
      />
      <HookFormInput
        control={control}
        name="password"
        labelStart="密碼"
        placeholder="請輸入密碼"
        type="password"
      />
      <HookFormInput
        control={control}
        name="validPassword"
        labelStart="確認密碼"
        placeholder="請再輸入一次密碼"
        type="password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ py: 2, mt: 3 }}>
        下一步
      </Button>
    </Stack>
  );
};

export default AccountStep;
