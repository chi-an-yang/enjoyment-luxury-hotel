import { useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Select from '@src/ui-components/Select';

const toDateObject = (dateString: string) => {
  // 使用 split('/') 方法將日期字符串分割為年、月、日的陣列
  const parts = dateString.split('/');

  // 確保分割後的陣列長度正確
  if (parts.length === 3) {
    const [year, month, date] = parts.map((part) => parseInt(part, 10)); // 將字符串陣列轉換為數字陣列

    // 返回日期物件
    return { year, month, date };
  } else {
    throw new Error('Invalid date string format.');
  }
};

const toDateString = (dateObject: DateObject) => {
  // 解構物件以獲取年、月、日
  const { year, month, date } = dateObject;

  // 確保年、月、日都存在
  if (year && month && date) {
    // 使用模板字符串來格式化日期字符串，並確保月份和日期為兩位數
    return `${year}/${month}/${date}`;
  } else {
    throw new Error('Invalid date object format.');
  }
};

export type DateString = string;
type DateObject = { year: number; month: number; date: number };

type DateSelectProps = {
  onChange: (value: DateString) => void;
  value?: DateString;
};

const DateSelect = ({ onChange, value }: DateSelectProps) => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState<DateObject>(
    toDateObject(value ?? `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`)
  );

  const getArrayFromStartToEnd = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);
  // Year
  const yearArray = getArrayFromStartToEnd(1900, now.getFullYear());
  // Month
  const monthArray = getArrayFromStartToEnd(1, 12);
  // Date
  const getLastDate = (newDate: DateObject): number =>
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
    onChange(toDateString(newSelectedDate));
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
