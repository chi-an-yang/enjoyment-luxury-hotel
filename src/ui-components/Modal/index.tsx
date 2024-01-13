import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useTheme,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

import { IoClose } from 'react-icons/io5';
import IFooterBtn from './Interface/IFooterBtn';
import IModalComponent from './Interface/IModalComponent';

const ModalComponent: React.FC<IModalComponent> = ({
  btnTxt,
  title,
  txtContent,
  children,
  cancelTxt,
  submitTxt,
  hideTitleCloseBtn,
  hideFooter,
  submitAction = () => {},
  closeCondition = () => {},
}) => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    submitAction();
    setOpen(false);
  };
  const footerBtns: IFooterBtn[] = [
    { variant: 'outlined', onClick: handleClose, btnTxt: cancelTxt, defaultBtnTxt: '取消' },
    { variant: 'contained', onClick: handleSubmit, btnTxt: submitTxt, defaultBtnTxt: '確認' },
  ];

  useEffect(() => {
    const returnFunc = closeCondition(handleClose);
    return returnFunc;
  }, [open, closeCondition]);

  return (
    <>
      {/* Modal Button */}
      <Button variant="contained" onClick={handleClickOpen}>
        {btnTxt}
      </Button>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Modal Title */}
        {!hideTitleCloseBtn && (
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
            <Box
              onClick={handleClose}
              fontSize={title ? '1.5rem' : '1rem'}
              margin={title ? '0' : '-16px'}
              sx={{ cursor: 'pointer' }}
            >
              <IoClose />
            </Box>
          </DialogTitle>
        )}

        {/* Modal Content */}
        <DialogContent>
          {txtContent ? (
            <DialogContentText id="alert-dialog-description" textAlign="center" p={2}>
              {txtContent}
            </DialogContentText>
          ) : (
            <Box p={6}>{children}</Box>
          )}
        </DialogContent>

        {/* Modal Footer */}
        {!hideFooter && (
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
            {footerBtns.map(({ variant, onClick, btnTxt, defaultBtnTxt }) => (
              <Button
                key={defaultBtnTxt}
                variant={variant}
                onClick={onClick}
                sx={{
                  flex: 1,
                  fontWeight: 'bold',
                  padding: '8px 16px',
                }}
              >
                {btnTxt ?? defaultBtnTxt}
              </Button>
            ))}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default ModalComponent;
