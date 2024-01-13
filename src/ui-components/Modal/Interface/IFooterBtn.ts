interface IFooterBtn {
  variant: 'outlined' | 'contained';
  onClick: () => void;
  btnTxt?: string;
  defaultBtnTxt: string;
}

export default IFooterBtn;
