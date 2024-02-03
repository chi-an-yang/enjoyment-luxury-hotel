import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import LoadingModal from '@src/ui-components/LoadingModal';
import axios, { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

const LoadingModalComponents = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  const { enqueueSnackbar } = useSnackbar();
  const testUrls = {
    success: 'https://jsonplaceholder.typicode.com/todos/1',
    fail: 'https://...',
  };

  const fetchData = async (url: string) =>
    axios
      .get(url)
      .then((res) => {
        if (res) console.log(res);
        enqueueSnackbar('預約成功，請至個人頁面查看詳情', { variant: 'success' });
      })
      .catch((err: AxiosError) => {
        enqueueSnackbar('訂單傳送失敗，請稍後再試', { variant: 'error' });
        throw err;
      });

  const handleClick = (type: 'success' | 'fail'): void => {
    openDialog();

    // fetch 時間太短了所以加個 setTimeout
    const timerId = setTimeout(() => {
      fetchData(testUrls[type]);
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
      <LoadingModal open={isDialogOpen} />
    </Stack>
  );
};

export default LoadingModalComponents;
