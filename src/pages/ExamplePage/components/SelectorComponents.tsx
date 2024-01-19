import { Typography } from '@mui/material';
import DistrictSelector from '@src/common/DistrictSelector';
import DateSelector from '@src/common/DateSelector';

const SelectorComponents = () => {
  return (
    <>
      <Typography variant="body1">District Selector</Typography>
      <DistrictSelector />
      <Typography variant="body1">Date Selector</Typography>
      <DateSelector />
    </>
  );
};

export default SelectorComponents;
