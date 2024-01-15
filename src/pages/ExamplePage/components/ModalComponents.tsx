import { Stack, Typography, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '../../../ui-components/Modal';

const ModalComponents = () => {
  const { palette } = useTheme();
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [open_3, setOpen_3] = useState(false);

  return (
    <Stack direction="row" spacing={2}>

      {/* 彈窗 1 */}
      <Button variant="contained" onClick={() => setOpen_1(true)}>
        彈窗（含標題）
      </Button>
      <ModalComponent
        open={open_1}
        setOpen={setOpen_1}
        title="彈窗標題"
        cancelTxt="取消文字範例"
        submitTxt="確認文字範例"
        submitAction={() => console.log('使用者點擊確認')}
      >
        <Typography variant="h4" color={palette.primary.main} component="span">
          彈窗內文範例
        </Typography>
      </ModalComponent>

      {/* 彈窗 2 */}
      <Button variant="contained" onClick={() => setOpen_2(true)}>
        彈窗（不含標題）
      </Button>
      <ModalComponent open={open_2} setOpen={setOpen_2} txtContent="彈窗內文範例（純文字）" />

      {/* 彈窗 3 */}
      <Button variant="contained" onClick={() => setOpen_3(true)}>
        讀取／特殊功能彈窗
      </Button>
      <ModalComponent
        open={open_3}
        setOpen={setOpen_3}
        hideModalTitle={true}
        hideActionButtons={true}
        cannotCloseManually={true}
        closeCondition={(closeModal: { (open: boolean): void }) => {
          const timerId = setTimeout(() => {
            closeModal(false);
          }, 3000);

          return () => clearTimeout(timerId);
        }}
      >
        <h1>讀取中...</h1>
        <p>視窗三秒後關閉</p>
      </ModalComponent>

    </Stack>
  );
};

export default ModalComponents;
