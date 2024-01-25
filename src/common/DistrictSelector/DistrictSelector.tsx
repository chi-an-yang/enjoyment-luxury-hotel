import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import districtJson from '@src/common/DistrictSelector/config/taiwan_districts.json';
import Selector from '@src/ui-components/Selector';

const DistrictSelector = ({
  onChange,
}: {
  onChange: (value: { city: string; distinct: string; zipCode: string }) => void;
}) => {
  const [selectedIndices, setSelectedIndices] = useState({
    cityIndex: 0,
    districtIndex: 0,
  });

  const handleLevelChange = (
    event: SelectChangeEvent<number>,
    level: 'cityIndex' | 'districtIndex'
  ) => {
    const index = Number(event.target.value);
    setSelectedIndices((prevIndices) => ({
      ...prevIndices,
      [level]: index,
      ...(level === 'cityIndex' && { districtIndex: 0 }),
    }));
  };

  useEffect(() => {
    const city = districtJson[selectedIndices.cityIndex];
    const district = city.districts[selectedIndices.districtIndex];

    onChange({
      city: city.name,
      distinct: district.name,
      zipCode: district.zip,
    });
  }, [selectedIndices]);

  return (
    <Stack direction="row" spacing={1}>
      <Selector
        value={selectedIndices.cityIndex}
        onChange={(e) => handleLevelChange(e, 'cityIndex')}
        data={districtJson.map((district, index) => ({ text: district.name, value: index }))}
      />
      <Selector
        value={selectedIndices.districtIndex}
        onChange={(e) => handleLevelChange(e, 'districtIndex')}
        data={districtJson[Number(selectedIndices.cityIndex)].districts.map((district, index) => ({
          text: district.name,
          value: index,
        }))}
      />
    </Stack>
  );
};

export default DistrictSelector;
