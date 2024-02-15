import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import AccountStep from './components/AccountStep';
import ProfileStep from './components/ProfileStep';
import { useRegisterFormStore } from './store/useRegisterFormStore';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@src/apis';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const steps = ['輸入信箱及密碼', '填寫基本資料'];

enum FormStep {
  ACCOUNT,
  PROFILE,
}

type StepperProps = {
  step: FormStep;
};

const RegisterStepper = ({ step }: StepperProps) => {
  return (
    <Box sx={{ width: '100%' }} mb={5}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const RegisterForm = () => {
  const [step, setStep] = useState<FormStep>(FormStep.ACCOUNT);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  // 註冊 mutation
  const { mutate } = useMutation({
    mutationFn: userApi.register,
    onSuccess: () => {
      // 註冊成功，跳註冊成功訊息
      enqueueSnackbar('註冊成功', { variant: 'success' });

      // 註冊成功後導頁去登入
      navigate('/login')
    },
    onError: (error) => {
      // 登入失敗，跳錯誤訊息
      let message = '註冊失敗';

      if (error instanceof Error) {
        message = error.message;
      }

      if (axios.isAxiosError(error)) {
        message = error?.response?.data?.message;
      }

      enqueueSnackbar(message, { variant: 'error' });
    },
  });

  const handleAccountSubmit = () => {
    setStep(FormStep.PROFILE);
  };

  const handleProfileSubmit = () => {
    // mutate 送出註冊
    const submitData = useRegisterFormStore.getState().submitData;
    mutate(submitData);
  };

  const handleProfileBack = () => {
    setStep(FormStep.ACCOUNT);
  };

  return (
    <Box>
      <RegisterStepper step={step} />
      {step === FormStep.ACCOUNT && <AccountStep onSubmit={handleAccountSubmit} />}
      {step === FormStep.PROFILE && (
        <ProfileStep onSubmit={handleProfileSubmit} onBack={handleProfileBack} />
      )}
    </Box>
  );
};

export default RegisterForm;
