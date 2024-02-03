import { Dialog, DialogContent } from '@mui/material';
import { ReactNode } from 'react';

interface LoadingModalProps {
  open: boolean;
  children?: ReactNode;
}
const LoadingModal = ({ open, children }: LoadingModalProps) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
