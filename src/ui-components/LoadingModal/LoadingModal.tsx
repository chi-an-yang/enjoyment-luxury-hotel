import { Dialog, DialogContent } from '@mui/material';
import { ReactNode, useEffect } from 'react';

interface LoadingModalProps {
  open: boolean;
  onClose: () => void;
  closeCondition?: (closeModal: (open: boolean) => void) => () => void;
  children?: ReactNode;
}
const LoadingModal = ({ open, onClose, children, closeCondition }: LoadingModalProps) => {
  useEffect(() => {
    const callback = closeCondition ? closeCondition(onClose) : () => {};
    return () => callback();
  }, [open, closeCondition]);

  return (
    <Dialog
      open={open}
      onClose={undefined}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
