import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  useTheme,
  SvgIcon,
} from '@mui/material';
import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

// Modal Title
interface TitleProps {
  title?: string;
  handleClose: () => void;
}
const Title = ({ title, handleClose }: TitleProps) => {
  const { palette } = useTheme();

  return (
    <DialogTitle
      id="alert-dialog-title"
      display="flex"
      justifyContent={title ? 'space-between' : 'end'}
      alignItems="center"
      borderBottom={title && `solid 1px ${palette.neutral[40]}`}
      fontWeight="bold"
      sx={{ backgroundColor: title && palette.neutral[10] }}
    >
      {title}
      <SvgIcon
        onClick={handleClose}
        fontSize="small"
        sx={{
          margin: title ? '0' : '-16px -20px',
          cursor: 'pointer',
        }}
      >
        <IoClose />
      </SvgIcon>
    </DialogTitle>
  );
};

// Modal ActionButtons
interface ActionButtonsProps {
  handleClose: () => void;
  cancelTxt?: string;
  handleSubmit: () => void;
  submitTxt?: string;
}
const ActionButtons = ({ handleClose, cancelTxt, handleSubmit, submitTxt }: ActionButtonsProps) => {
  const { palette } = useTheme();

  return (
    <DialogActions
      sx={{
        backgroundColor: `${palette.neutral[10]}`,
        borderTop: `solid 1px ${palette.neutral[40]}`,
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        fullWidth
        variant="outlined"
        onClick={handleClose}
        sx={{
          padding: '8px 16px',
        }}
      >
        {cancelTxt ?? '取消'}
      </Button>
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{
          padding: '8px 16px',
        }}
      >
        {submitTxt ?? '確認'}
      </Button>
    </DialogActions>
  );
};

// Modal
interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: ReactNode;
  cancelTxt?: string;
  submitTxt?: string;
  submitAction?: () => void;
}
const Modal = ({
  open,
  handleClose,
  title,
  children,
  cancelTxt,
  submitTxt,
  submitAction = () => {},
}: ModalProps) => {
  const handleSubmit = () => {
    submitAction();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '.MuiDialogContent-root': {
          padding: '48px 60px !important',
        },
      }}
    >
      <Title title={title} handleClose={handleClose} />
      <DialogContent>{children}</DialogContent>
      <ActionButtons
        handleClose={handleClose}
        cancelTxt={cancelTxt}
        handleSubmit={handleSubmit}
        submitTxt={submitTxt}
      />
    </Dialog>
  );
};

export default Modal;
