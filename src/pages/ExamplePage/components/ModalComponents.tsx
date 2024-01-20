import { Stack, Typography, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '@src/ui-components/Modal';

const ModalComponents = () => {
  const { palette } = useTheme();
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);

  return (
    <Stack direction="row" spacing={2}>
      {/* 彈窗 1 */}
      <Button variant="contained" onClick={() => setOpen_1(true)}>
        彈窗（含標題）
      </Button>
      <ModalComponent
        open={open_1}
        onClose={() => setOpen_1(false)}
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
      <ModalComponent open={open_2} onClose={() => setOpen_2(false)}>
        <Typography component="span">彈窗內文範例 2</Typography>
      </ModalComponent>
    </Stack>
  );
};

export default ModalComponents;
