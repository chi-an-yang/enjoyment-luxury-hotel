import { Typography } from '@mui/material';
import DistrictSelect, { DistrictData } from '@src/common/DistrictSelect';
import DateSelect, { DateString } from '@src/common/DateSelect';

const SelectComponents = () => {
  const handleDistrictChange = (value: DistrictData) => {
    console.log(value);
  };
  const handleDateChange = (value: DateString) => {
    console.log(value);
  };
  return (
    <>
      <Typography variant="body1">District Select</Typography>
      <DistrictSelect onChange={handleDistrictChange} />
      <DistrictSelect zipcode={882} onChange={handleDistrictChange} />
      <Typography variant="body1">Date Select</Typography>
      <DateSelect onChange={handleDateChange} />
      <DateSelect value='2023/12/31' onChange={handleDateChange} />
    </>
  );
};

export default SelectComponents;
