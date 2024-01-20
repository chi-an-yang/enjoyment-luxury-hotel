import { styled } from '@mui/material/styles';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 4,
  width: 24,
  height: 24,
  backgroundColor: theme.palette.neutral[0],
  'input:hover ~ &': {
    boxShadow: `0px 0px 0px 2px #BF9D7D33`,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.neutral[60],
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: '#BF9D7D',
  '&::before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#7B6651',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.neutral[60],
  },
}));

const Checkbox = (props: CheckboxProps) => {
  return (
    <MuiCheckbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default Checkbox;
