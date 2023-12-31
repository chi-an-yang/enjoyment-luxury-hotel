import { Stack, Typography, Button, TextField } from '@mui/material';

const MuiComponents = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Button</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Text Field</Typography>
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiComponents;
