import { useEffect, useState } from 'react';
import { MenuItem, FormControl, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import districtJson from './config/taiwan_districts.json';

interface SelectorItemProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  data: { text: string; value: string | number }[];
}
const SelectorItem = ({ value, onChange, data }: SelectorItemProps) => {
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {data.map(({ text, value }, index) => (
          <MenuItem key={index} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const DistrictSelector = () => {
  const [selectedIndices, setSelectedIndices] = useState({
    level1Index: 0,
    level2Index: 0,
  });

  const handleLevelChange = (
    event: SelectChangeEvent<number>,
    level: 'level1Index' | 'level2Index'
  ) => {
    const index = Number(event.target.value);
    setSelectedIndices((prevIndices) => ({
      ...prevIndices,
      [level]: index,
      ...(level === 'level1Index' && { level2Index: 0 }),
    }));
  };

  return (
    <>
      <SelectorItem
        value={selectedIndices.level1Index}
        onChange={(e) => handleLevelChange(e, 'level1Index')}
        data={districtJson.map((district, index) => ({ text: district.name, value: index }))}
      />
      <SelectorItem
        value={selectedIndices.level2Index}
        onChange={(e) => handleLevelChange(e, 'level2Index')}
        data={districtJson[Number(selectedIndices.level1Index)].districts.map(
          (district, index) => ({ text: district.name, value: index })
        )}
      />
    </>
  );
};

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

  // Year
  const startYear = 1900;
  const endYear = 2024;
  const yearsArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  // Month
  const startMonth = 1;
  const endMonth = 12;
  const monthsArray = Array.from(
    { length: endMonth - startMonth + 1 },
    (_, index) => startMonth + index
  );

  // Date
  const [datesArray, setDatesArray] = useState([now.getDate()] as number[]);
  // 設定年分或月份後重新設定日數
  useEffect(() => {
    const startDate = 1;
    const endDate = new Date(selectedDate.year, selectedDate.month, 0).getDate();
    setDatesArray(Array.from({ length: endDate - startDate + 1 }, (_, index) => startDate + index));
  }, [selectedDate.year, selectedDate.month]);
  // 日數重新設定後檢查當前選擇日期是否超出範圍
  useEffect(() => {
    if (selectedDate.date > datesArray[datesArray.length - 1]) {
      setSelectedDate((prevIndices) => ({
        ...prevIndices,
        date: datesArray[datesArray.length - 1],
      }));
    }
  }, [datesArray, selectedDate.date]);

  return (
    <>
      <SelectorItem
        value={selectedDate.year}
        onChange={(e) => handleDateChange(e, 'year')}
        data={yearsArray.map((year) => ({ text: year.toString(), value: year }))}
      />
      <SelectorItem
        value={selectedDate.month}
        onChange={(e) => handleDateChange(e, 'month')}
        data={monthsArray.map((month) => ({ text: month.toString(), value: month }))}
      />
      <SelectorItem
        value={selectedDate.date}
        onChange={(e) => handleDateChange(e, 'date')}
        data={datesArray.map((date) => ({ text: date.toString(), value: date }))}
      />
    </>
  );
};

interface SelectorProps {
  type: string;
}
const Selector = ({ type }: SelectorProps) => {
  const SelectorContent = type === 'district' ? <DistrictSelector /> : <DateSelector />;

  return (
    <Stack direction="row" spacing={1}>
      {SelectorContent}
    </Stack>
  );
};

export default Selector;
