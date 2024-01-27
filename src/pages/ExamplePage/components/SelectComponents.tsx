import { Typography } from '@mui/material';
import DistrictSelect, { DistrictSelectProps } from '@src/common/DistrictSelect';
import DateSelect, { DateSelectProps } from '@src/common/DateSelect';

const SelectComponents = () => {
  const handleDistrictChange = (value: DistrictSelectProps) => {
    console.log(value);
  };
  const handleDateChange = (value: DateSelectProps) => {
    console.log(value);
  };
  return (
    <>
      <Typography variant="body1">District Select</Typography>
      <DistrictSelect onChange={handleDistrictChange} />
      <DistrictSelect zipCode="882" onChange={handleDistrictChange} />
      <Typography variant="body1">Date Select</Typography>
      <DateSelect onChange={handleDateChange} />
      <DateSelect year={2023} month={12} date={31} onChange={handleDateChange} />
    </>
  );
};

export default SelectComponents;
