import { useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import districtJson from '@src/common/DistrictSelector/config/taiwan_districts.json';
import Selector from '@src/ui-components/Selector';

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
    <Stack direction="row" spacing={1}>
      <Selector
        value={selectedIndices.level1Index}
        onChange={(e) => handleLevelChange(e, 'level1Index')}
        data={districtJson.map((district, index) => ({ text: district.name, value: index }))}
      />
      <Selector
        value={selectedIndices.level2Index}
        onChange={(e) => handleLevelChange(e, 'level2Index')}
        data={districtJson[Number(selectedIndices.level1Index)].districts.map(
          (district, index) => ({ text: district.name, value: index })
        )}
      />
    </Stack>
  );
};

export default DistrictSelector;
