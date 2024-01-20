import { Stack, useTheme } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type InputFieldProps = {
  labelStart?: string;
  labelEnd?: string;
} & TextFieldProps;

const InputField = ({ labelStart, labelEnd, ...props }: InputFieldProps) => {
  const { palette } = useTheme();

  return (
    <Stack>
      <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
        <Typography variant="body1" color={palette.neutral[0]}>
          {labelStart}
        </Typography>
        <Typography variant="body1" color={palette.primary.main}>
          {labelEnd}
        </Typography>
      </Stack>
      <TextField
        variant="outlined"
        {...props}
      />
    </Stack>
  );
};

export default InputField;
