import { Stack, Typography, Button, CircularProgress, useTheme } from '@mui/material';
import { useState } from 'react';
import LoadingModal from '../../../ui-components/LoadingModal';
import Logo from '@src/assets/logo.svg?react';
import axios, { AxiosError } from 'axios';
import { MdClose } from 'react-icons/md';
import { VariantType, useSnackbar, SnackbarKey, SnackbarOrigin } from 'notistack';

type ResultType = 'success' | 'fail';
const LoadingModalComponents = () => {
  const { palette } = useTheme();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const testUrls = {
    success: 'https://jsonplaceholder.typicode.com/todos/1',
    fail: 'https://...',
  };
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

  const handleShowToast = ({
    message = 'Update success',
    anchorOrigin = { horizontal: 'left', vertical: 'bottom' },
    variant = 'success',
  }: {
    message: string;
    anchorOrigin?: SnackbarOrigin;
    variant: VariantType;
  }) => {
    enqueueSnackbar(message, { variant, anchorOrigin, action });
  };

  const fetchData = async (type: ResultType) =>
    axios
      .get(testUrls[type])
      .then((res) => {
        if (res) console.log(res);
        handleShowToast({
          message: '預約成功，請至個人頁面查看詳情',
          variant: 'success',
        });
      })
      .catch((err: AxiosError) => {
        handleShowToast({
          message: '訂單傳送失敗，請稍後再試',
          variant: 'error',
        });
        throw err;
      });

  const handleClick = (type: ResultType): void => {
    openDialog();

    // fetch 時間太短了所以加個 setTimeout
    const timerId = setTimeout(() => {
      fetchData(type);
      closeDialog();
      clearTimeout(timerId);
    }, 2000);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={() => handleClick('success')}>
        讀取彈窗（成功）
      </Button>
      <Button variant="contained" onClick={() => handleClick('fail')}>
        讀取彈窗（失敗）
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
