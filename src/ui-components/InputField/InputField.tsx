import { Stack, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useState } from 'react';

type InputFieldProps = {
  labelStart: string;
  labelEnd: string;
  defaultValue: string;
  placeholder: string;
};

const InputField = ({ labelStart, labelEnd, defaultValue = '', placeholder }: InputFieldProps) => {
  const { palette } = useTheme();
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Stack>
  );
};

export default InputField;
