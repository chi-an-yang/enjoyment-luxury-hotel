import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Selector from '@src/ui-components/Selector';

const DateSelector = () => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  });
  const handleDateChange = (event: SelectChangeEvent<number>, type: 'year' | 'month' | 'date') => {
    setSelectedDate((prevIndices) => ({
      ...prevIndices,
      [type]: event.target.value as number,
    }));
  };
  const getArrayFromStartToEnd = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);
  // Year
  const yearArray = getArrayFromStartToEnd(1900, selectedDate.year);
  // Month
  const monthArray = getArrayFromStartToEnd(1, 12);
  // Date
  const [dateArray, setDateArray] = useState([now.getDate()] as number[]);
  // 設定年分或月份後重新設定日數
  useEffect(() => {
    // 由當前年分或月份取得新的總日數
    const getNewDate = (): number => new Date(selectedDate.year, selectedDate.month, 0).getDate();
    const newDateArray = getArrayFromStartToEnd(1, getNewDate());
    // 獲得新日數後檢查當前選擇日期是否超出範圍，是的話更正為該月最大日數
    const latestDate = newDateArray[newDateArray.length - 1];
    if (selectedDate.date > latestDate) {
      setSelectedDate((prevIndices) => ({
        ...prevIndices,
        date: latestDate,
      }));
    }
    // 更新日數
    setDateArray(newDateArray);
  }, [selectedDate.year, selectedDate.month]);

  return (
    <Stack direction="row" spacing={1}>
      <Selector
        value={selectedDate.year}
        onChange={(e) => handleDateChange(e, 'year')}
        data={yearArray.map((year) => ({ text: year.toString(), value: year }))}
      />
      <Selector
        value={selectedDate.month}
        onChange={(e) => handleDateChange(e, 'month')}
        data={monthArray.map((month) => ({ text: month.toString(), value: month }))}
      />
      <Selector
        value={selectedDate.date}
        onChange={(e) => handleDateChange(e, 'date')}
        data={dateArray.map((date) => ({ text: date.toString(), value: date }))}
      />
    </Stack>
  );
};

export default DateSelector;
