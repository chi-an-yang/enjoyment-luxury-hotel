import { ReactNode } from 'react';

interface IModalComponent {
  btnTxt: string;
  title?: string;
  txtContent?: string;
  children?: ReactNode;
  cancelTxt?: string;
  submitTxt?: string;
  hideTitleCloseBtn?: boolean;
  hideFooter?: boolean;
  submitAction?: () => void;
  closeCondition?: (callback: () => void) => (closeModal: boolean) => void;
}

export default IModalComponent;
