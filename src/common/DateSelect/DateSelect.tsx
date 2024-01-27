import { useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Select from '@src/ui-components/Select';

export type DateSelectProps = { year: number; month: number; date: number };
const DateSelect = ({
  onChange,
  year,
  month,
  date,
}: {
  onChange: (value: DateSelectProps) => void;
  year?: number;
  month?: number;
  date?: number;
}) => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: year ?? now.getFullYear(),
    month: month ?? now.getMonth() + 1,
    date: date ?? now.getDate(),
  });

  const getArrayFromStartToEnd = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);
  // Year
  const yearArray = getArrayFromStartToEnd(1900, now.getFullYear());
  // Month
  const monthArray = getArrayFromStartToEnd(1, 12);
  // Date
  const getLastDate = (newDate: DateSelectProps): number =>
    new Date(newDate.year, newDate.month, 0).getDate();
  const [dateArray, setDateArray] = useState(getArrayFromStartToEnd(1, getLastDate(selectedDate)));

  const handleDateChange = (event: SelectChangeEvent<number>, type: 'year' | 'month' | 'date') => {
    const newSelectedDate = {
      ...selectedDate,
      [type]: event.target.value as number,
    };

    // 設定年分或月份後重新設定新的總日數
    if (type === 'year' || type === 'month') {
      const newDateArray = getArrayFromStartToEnd(1, getLastDate(newSelectedDate));
      setDateArray(newDateArray);

      // 獲得新日數後檢查當前選擇日期是否超出範圍，是的話更正為該月最大日數
      const latestDate = newDateArray[newDateArray.length - 1];
      if (newSelectedDate.date > latestDate) {
        newSelectedDate.date = latestDate;
      }
    }

    setSelectedDate(newSelectedDate);
    onChange(newSelectedDate);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Select
        value={selectedDate.year}
        onChange={(e) => handleDateChange(e, 'year')}
        data={yearArray.map((year) => ({ text: year.toString(), value: year }))}
      />
      <Select
        value={selectedDate.month}
        onChange={(e) => handleDateChange(e, 'month')}
        data={monthArray.map((month) => ({ text: month.toString(), value: month }))}
      />
      <Select
        value={selectedDate.date}
        onChange={(e) => handleDateChange(e, 'date')}
        data={dateArray.map((date) => ({ text: date.toString(), value: date }))}
      />
    </Stack>
  );
};

export default DateSelect;
