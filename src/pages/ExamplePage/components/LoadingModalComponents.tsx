import { Stack, Typography, Button, CircularProgress, useTheme } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '../../../ui-components/LoadingModal';
import Logo from '@src/assets/logo.svg?react';

const LoadingModalComponents = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="row">
      <Button variant="contained" onClick={() => setOpen(true)}>
        讀取彈窗
      </Button>
      <ModalComponent
        open={open}
        onClose={() => setOpen(false)}
        closeCondition={(closeModal: { (open: boolean): void }) => {
          const timerId = setTimeout(() => {
            closeModal(false);
          }, 2500);

          return () => clearTimeout(timerId);
        }}
      >
        <Stack flex="row" alignItems="center" py={12} px={20}>
          <Stack flex="row" alignItems="center">
            <CircularProgress />
          </Stack>
          <Stack flex="row" alignItems="center" width={100}>
            <Logo width="100%" fill={palette.primary.main} />
          </Stack>
          <Typography fontWeight="bold">正在處理你的預定</Typography>
          <small></small>
        </Stack>
      </ModalComponent>
    </Stack>
  );
};

export default LoadingModalComponents;
