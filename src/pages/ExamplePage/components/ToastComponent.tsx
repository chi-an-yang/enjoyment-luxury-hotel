import { Button, Stack } from '@mui/material';
import { MdClose } from 'react-icons/md';

import { VariantType, useSnackbar, SnackbarKey, SnackbarOrigin } from 'notistack';
const ToastComponent = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (snackbarId: SnackbarKey) => {
    return (
      <MdClose
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      />
    );
  };

  const handleClick = ({
    message = 'Update success',
    anchorOrigin = { horizontal: 'left', vertical: 'bottom' },
    variant = 'success',
  }: {
    message: string;
    anchorOrigin: SnackbarOrigin;
    variant: VariantType;
  }) => {
    enqueueSnackbar(message, { variant, anchorOrigin, action });
  };

  const ToastButton = ({
    message,
    variant,
    anchorOrigin,
    text,
  }: {
    message: string;
    variant: VariantType;
    anchorOrigin: SnackbarOrigin;
    text: string;
  }) => {
    return (
      <Button
        sx={{ ml: 2 }}
        variant="contained"
        onClick={() => handleClick({ message, anchorOrigin, variant })}
      >
        {text}
      </Button>
    );
  };
  return (
    <Stack direction="row" spacing={2}>
      <ToastButton
        message="Update success"
        variant="success"
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        text="Success"
      />
      <ToastButton
        message="Update fail"
        variant="error"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        text="Error"
      />
    </Stack>
  );
};

export default ToastComponent;
