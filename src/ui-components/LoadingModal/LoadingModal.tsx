import {
  CircularProgress,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Logo from '@src/assets/logo.svg?react';
import { ReactNode } from 'react';

interface LoadingModalProps {
  open: boolean;
  children?: ReactNode;
}
const LoadingModal = ({ open }: LoadingModalProps) => {
  const { palette } = useTheme();
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Stack flex="row" alignItems="center" py={12} px={20}>
          <Stack flex="row" alignItems="center">
            <CircularProgress />
          </Stack>
          <Stack flex="row" alignItems="center" width={100}>
            <Logo width="100%" fill={palette.primary.main} />
          </Stack>
          <Typography fontWeight="bold">正在處理你的預定</Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
