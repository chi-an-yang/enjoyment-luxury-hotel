import { Stack, Typography, Button, TextField, Link } from '@mui/material';
import InputField from '@src/ui-components/InputField';

const MuiComponents = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Button</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained">會員登入</Button>
          <Button disabled variant="contained">
            會員登入
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Text Field</Typography>

        <Stack spacing={2} direction="row">
          <TextField variant="outlined" placeholder="請輸入密碼" value="jessica@sample.com" />
          <TextField variant="outlined" placeholder="請輸入密碼" />
        </Stack>
        <Stack spacing={2} bgcolor={(theme)=> theme.palette.neutral[40]} p={2}>
          <Typography variant="subtitle1">本次需求元件</Typography>
          <InputField labelStart="密碼" labelEnd="必填" defaultValue="" placeholder="請輸入密碼" />
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Link</Typography>
        <Stack spacing={2} direction="row">
          <Link href="https://google.com">忘記密碼？</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiComponents;
