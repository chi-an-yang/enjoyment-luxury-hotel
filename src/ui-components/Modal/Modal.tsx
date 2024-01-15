import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useTheme,
  SvgIcon,
} from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

// Modal Title
interface TitleProps {
  show?: boolean;
  title?: string;
  handleClose: () => void;
}
const Title = ({ show = true, title, handleClose }: TitleProps) => {
  const { palette } = useTheme();
  if (!show) return;

  return (
    <DialogTitle
      id="alert-dialog-title"
      display="flex"
      justifyContent={title ? 'space-between' : 'end'}
      alignItems="center"
      borderBottom={title ? `solid 1px ${palette.neutral[40]}` : ''}
      fontWeight="bold"
      sx={{ backgroundColor: title ? palette.neutral[10] : '' }}
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

// Modal Content
interface ContentTextProps {
  txtContent: string;
}
const ContentText = ({ txtContent }: ContentTextProps) => (
  <DialogContentText id="alert-dialog-description" textAlign="center" p={2}>
    {txtContent}
  </DialogContentText>
);
interface CustomContentProps {
  children: ReactNode;
}
const CustomContent = ({ children }: CustomContentProps) => <Box p={6}>{children}</Box>;
interface ContentProps {
  txtContent?: string;
  children?: ReactNode;
}
const Content = ({ txtContent, children }: ContentProps) => (
  <DialogContent>
    {txtContent ? <ContentText txtContent={txtContent} /> : <CustomContent children={children} />}
  </DialogContent>
);

// Modal ActionButtons
interface ActionButtonsProps {
  show?: boolean;
  handleClose: () => void;
  cancelTxt?: string;
  handleSubmit: () => void;
  submitTxt?: string;
}
const ActionButtons = ({
  show = true,
  handleClose,
  cancelTxt,
  handleSubmit,
  submitTxt,
}: ActionButtonsProps) => {
  const { palette } = useTheme();
  if (!show) return;

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
  setOpen: (open: boolean) => void;
  title?: string;
  txtContent?: string;
  children?: ReactNode;
  cancelTxt?: string;
  submitTxt?: string;
  hideModalTitle?: boolean;
  hideActionButtons?: boolean;
  cannotCloseManually?: boolean;
  submitAction?: () => void;
  closeCondition?: (closeModal: (open: boolean) => void) => () => void;
}
const Modal = ({
  open,
  setOpen,
  title,
  txtContent,
  children,
  cancelTxt,
  submitTxt,
  hideModalTitle,
  hideActionButtons,
  cannotCloseManually,
  submitAction = () => {},
  closeCondition,
}: ModalProps) => {
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    submitAction();
    setOpen(false);
  };
  useEffect(() => {
    const callback = closeCondition ? closeCondition(handleClose) : () => {};
    return () => {
      callback();
    };
  }, [open, closeCondition]);

  return (
    <Dialog
      open={open}
      onClose={!cannotCloseManually ? handleClose : () => {}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Title show={!hideModalTitle} title={title} handleClose={handleClose} />
      <Content txtContent={txtContent} children={children} />
      <ActionButtons
        show={!hideActionButtons}
        handleClose={handleClose}
        cancelTxt={cancelTxt}
        handleSubmit={handleSubmit}
        submitTxt={submitTxt}
      />
    </Dialog>
  );
};

export default Modal;
