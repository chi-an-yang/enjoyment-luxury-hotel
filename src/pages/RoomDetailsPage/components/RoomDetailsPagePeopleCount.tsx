import { useState } from 'react';
import { Grid, Box, Typography, TextField, useTheme } from '@mui/material';
import CounterMinus from '@src/assets/icons/counter_minus.svg?react';
import CounterPlus from '@src/assets/icons/counter_plus.svg?react';

type roomPeopleCountProps = number;

type counterProps = {
  countPeopleNum: number;
  setCountPeopleNum: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ countPeopleNum, setCountPeopleNum }: counterProps) => {
  const { palette } = useTheme();

  const customTextFieldStyle = {
    width: '24px',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '.MuiInputBase-root': {
      width: '100%',
      height: '100%',
    },
    '.MuiInputBase-input': {
      width: '100%',
      height: '100%',
      padding: 0,
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '28.8px',
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  };
  const customBoxStyle = {
    width: '56px',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    border: `1px solid ${palette.neutral[40]}`,
    transition: 'all .3s',
    cursor: 'pointer',
    ':hover': {
      border: `1px solid ${palette.hotelPrimary[100]}`,
    },
  };
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (countPeopleNum <= 0) return;
    return setCountPeopleNum(parseInt(e.target.value));
  };
  const handlePeopleClick = (status: 'minus' | 'plus') => {
    if (status == 'plus') setCountPeopleNum(countPeopleNum + 1);
    if (countPeopleNum <= 0) return;
    if (status == 'minus') setCountPeopleNum(countPeopleNum - 1);
  };
  return (
    <Grid display={'flex'} gap={2}>
      <Box sx={customBoxStyle} onClick={() => handlePeopleClick('minus')}>
        <CounterMinus />
      </Box>
      <TextField
        id="outlined-controlled"
        value={countPeopleNum}
        size={'medium'}
        margin={'none'}
        onChange={handlePeopleChange}
        sx={customTextFieldStyle}
      />
      <Box sx={customBoxStyle} onClick={() => handlePeopleClick('plus')}>
        <CounterPlus />
      </Box>
    </Grid>
  );
};

const RoomDetailsPagePeopleCount = ({ peopleNum }: { peopleNum: roomPeopleCountProps }) => {
  const { palette } = useTheme();
  const [countPeopleNum, setCountPeopleNum] = useState<number>(peopleNum);
  return (
    <Grid
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      color={palette.neutral[100]}
      mb={5}
    >
      <Typography variant="Title_16px_B">人數</Typography>
      <Counter countPeopleNum={countPeopleNum} setCountPeopleNum={setCountPeopleNum} />
    </Grid>
  );
};

export default RoomDetailsPagePeopleCount;
