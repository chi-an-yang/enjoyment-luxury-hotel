import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import InputField from '@src/ui-components/InputField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { FormEvent, useState } from 'react';
import Checkbox from '@src/ui-components/Checkbox';
import DateSelect from '@src/common/DateSelect';
import DistrictSelect from '@src/common/DistrictSelect';

const steps = ['輸入信箱及密碼', '填寫基本資料'];

type Step = number;

type StepperProps = {
  step: Step;
};

const RegisterStepper = ({ step }: StepperProps) => {
  return (
    <Box sx={{ width: '100%' }} mb={5}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            {/* <StepButton onClick={handleClick(index)}>{label}</StepButton> */}
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

type StepViewProps = {
  step: Step;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AccountStep = ({ step, onSubmit }: StepViewProps) => {
  if (step !== 0) return null;
  return (
    <Stack component={'form'} gap={2} onSubmit={onSubmit}>
      <InputField
        // control={control}
        // rules={{ validate:  }}
        name="email"
        labelStart="電子信箱"
        placeholder="hello@example.com"
      />
      <InputField
        // control={control}
        // rules={{ validate:  }}
        name="password"
        labelStart="密碼"
        placeholder="請輸入密碼"
        type="password"
      />
      <InputField
        // control={control}
        // rules={{ validate:  }}
        name="password"
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

type ProfileStep = StepViewProps & { onBack: () => void };

const ProfileStep = ({ step, onSubmit, onBack }: ProfileStep) => {
  const { palette } = useTheme();
  if (step !== 1) return null;

  return (
    <Stack component={'form'} gap={2} onSubmit={onSubmit}>
      <InputField
        // control={control}
        // rules={{ validate:  }}
        name="username"
        labelStart="姓名"
        placeholder="請輸入姓名"
      />
      <InputField
        // control={control}
        // rules={{ validate:  }}
        name="phone"
        labelStart="手機號碼"
        placeholder="請輸入手機號碼"
      />
      <Box>
        <Typography component={'p'} variant="Subtitle_14px_B" color={palette.neutral[0]} mb={1}>
          生日
        </Typography>
        <DateSelect onChange={() => {}} />
      </Box>
      <Box>
        <Typography component={'p'} variant="Subtitle_14px_B" color={palette.neutral[0]} mb={1}>
          地址
        </Typography>
        <DistrictSelect onChange={() => {}} />
        <InputField
          // control={control}
          // rules={{ validate:  }}
          name="address"
          placeholder="請輸入詳細地址"
        />
      </Box>
      <FormControlLabel
        control={<Checkbox />}
        slotProps={{
          typography: {
            variant: 'Title_16px_B',
            color: (theme) => theme.palette.neutral[0],
          },
        }}
        label="我已閱讀並同意本網站個資使用規範"
      />
      <Stack direction="row" gap={1}>
        <Button type="button" onClick={onBack} fullWidth variant="contained" sx={{ py: 2, mt: 3 }}>
          上一步
        </Button>
        <Button type="submit" fullWidth variant="contained" sx={{ py: 2, mt: 3 }}>
          完成註冊
        </Button>
      </Stack>
    </Stack>
  );
};

const RegisterForm = () => {
  const [step, setStep] = useState<Step>(0);

  const handleAccountSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('下一步');
    setStep(1);
  };

  const handleProfileSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('完成註冊');
  };

  const handleProfileBack = () => {
    console.log('上一步');
    setStep(0);
  };

  return (
    <Box>
      <RegisterStepper step={step} />
      <AccountStep step={step} onSubmit={handleAccountSubmit} />
      <ProfileStep step={step} onSubmit={handleProfileSubmit} onBack={handleProfileBack} />
    </Box>
  );
};

export default RegisterForm;
