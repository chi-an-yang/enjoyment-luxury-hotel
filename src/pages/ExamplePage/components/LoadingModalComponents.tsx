import { Stack, Typography, Button, CircularProgress, useTheme } from '@mui/material';
import { useState } from 'react';
import LoadingModal from '../../../ui-components/LoadingModal';
import Logo from '@src/assets/logo.svg?react';

const LoadingModalComponents = () => {
  const { palette } = useTheme();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const handleClick = (): void => {
    openDialog();

    const timerId = setTimeout(() => {
      closeDialog();
      clearTimeout(timerId);
    }, 2000);
  };

  return (
    <Stack direction="row">
      <Button variant="contained" onClick={handleClick}>
        讀取彈窗
      </Button>
      <LoadingModal open={isDialogOpen}>
        <Stack flex="row" alignItems="center" py={12} px={20}>
          <Stack flex="row" alignItems="center">
            <CircularProgress />
          </Stack>
          <Stack flex="row" alignItems="center" width={100}>
            <Logo width="100%" fill={palette.primary.main} />
          </Stack>
          <Typography fontWeight="bold">正在處理你的預定</Typography>
        </Stack>
      </LoadingModal>
    </Stack>
  );
};

export default LoadingModalComponents;
