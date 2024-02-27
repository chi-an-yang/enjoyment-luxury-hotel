import { Stack, Box, Typography, FormControlLabel, Button, useTheme } from '@mui/material';
import HookFormInput from '@src/common/HookFormInput';
import Checkbox from '@src/ui-components/Checkbox';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRegisterFormStore } from '../../store/useRegisterFormStore';
import HookFormDateSelector from '@src/common/HookFormDateSelector';
import HookFormDistrictSelector from '@src/common/HookFormDistrictSelector';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface ProfileStepFormValues {
  name: string;
  phone: string;
  isAgreePolicy: boolean;
  birthday: string;
  zipcode: number;
  detail: string;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required('此欄必填'),
    phone: yup
      .string()
      .matches(
        /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/,
        '請輸入有效的手機號碼或市話'
      )
      .required('此欄必填'),
    isAgreePolicy: yup.boolean().oneOf([true], '必須勾選').required(),
    birthday: yup.string().required(),
    zipcode: yup.number().required(),
    detail: yup.string().required('此欄必填'),
  })
  .required();

type ProfileStepProps = {
  isSubmitPending: boolean;
  onSubmit: () => void;
  onBack: () => void;
};

const ProfileStep = ({ isSubmitPending, onSubmit, onBack }: ProfileStepProps) => {
  const { palette } = useTheme();

  const setProfileData = useRegisterFormStore((state) => state.setProfileData);
  const {
    name,
    phone,
    isAgreePolicy,
    birthday,
    address: { detail, zipcode },
  } = useRegisterFormStore((state) => state.submitData);

  const { control, handleSubmit, formState, getValues } = useForm<ProfileStepFormValues>({
    defaultValues: {
      name,
      phone,
      isAgreePolicy,
      birthday,
      detail,
      zipcode,
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleFormSubmit: SubmitHandler<ProfileStepFormValues> = (data) => {
    // 把資料存到 zustand
    setProfileData(data);
    onSubmit();
  };

  const handleBack = () => {
    setProfileData(getValues());
    onBack();
  };

  return (
    <Stack component={'form'} gap={2} onSubmit={handleSubmit(handleFormSubmit)}>
      <HookFormInput control={control} name="name" labelStart="姓名" placeholder="請輸入姓名" />
      <HookFormInput
        control={control}
        name="phone"
        labelStart="手機號碼"
        placeholder="請輸入手機號碼"
      />
      <Box>
        <Typography component={'p'} variant="Subtitle_14px_B" color={palette.neutral[0]} mb={1}>
          生日
        </Typography>
        <HookFormDateSelector control={control} name="birthday" />
      </Box>
      <Box>
        <Typography component={'p'} variant="Subtitle_14px_B" color={palette.neutral[0]} mb={1}>
          地址
        </Typography>
        <HookFormDistrictSelector control={control} name="zipcode" />
        <HookFormInput control={control} name="detail" placeholder="請輸入詳細地址" />
      </Box>
      <Controller
        control={control}
        name="isAgreePolicy"
        render={({ field: { ref, value, ...field } }) => (
          <FormControlLabel
            ref={ref}
            {...field}
            control={<Checkbox checked={value} />}
            slotProps={{
              typography: {
                variant: 'Title_16px_B',
                color: (theme) => theme.palette.neutral[0],
              },
            }}
            label="我已閱讀並同意本網站個資使用規範"
          />
        )}
      />
      <Stack direction="row" gap={1}>
        <Button
          type="button"
          onClick={handleBack}
          fullWidth
          variant="contained"
          sx={{ py: 2, mt: 3 }}
        >
          上一步
        </Button>
        <Button
          type="submit"
          disabled={!formState.isValid || isSubmitPending}
          fullWidth
          variant="contained"
          sx={{ py: 2, mt: 3 }}
        >
          完成註冊
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProfileStep;
