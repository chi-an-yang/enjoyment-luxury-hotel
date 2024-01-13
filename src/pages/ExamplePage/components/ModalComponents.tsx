import { Stack, Typography } from '@mui/material';
import ModalComponent from '../../../ui-components/Modal';
const ModalComponents = () => {
  return (
    <Stack direction="row" spacing={2}>
      {/* 彈窗 1 */}
      <ModalComponent
        btnTxt="彈窗（含標題）"
        title="彈窗標題"
        cancelTxt="取消文字範例"
        submitTxt="確認文字範例"
        submitAction={() => console.log('使用者點擊確認')}
      >
        <Typography variant="h4" color={(theme) => theme.palette.primary.main} component="span">
          彈窗內文範例
        </Typography>
      </ModalComponent>
      {/* 彈窗 2 */}
      <ModalComponent btnTxt="彈窗（不含標題）" txtContent="彈窗內文範例（純文字）" />
      {/* 彈窗 3 */}
      <ModalComponent
        btnTxt="讀取／特殊功能彈窗"
        hideTitleCloseBtn={true}
        hideFooter={true}
        closeCondition={(timeoutCallBack: (closeModal: boolean) => void): () => void => {
          const timerId = setTimeout(() => {
            timeoutCallBack(false);
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
