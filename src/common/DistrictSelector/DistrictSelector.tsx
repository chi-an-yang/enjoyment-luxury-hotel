import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import districtJson from '@src/common/DistrictSelector/config/taiwan_districts.json';
import Selector from '@src/ui-components/Selector';

const DistrictSelector = ({
  onChange,
  zipCode,
}: {
  onChange: (value: { city: string; distinct: string; zipCode: string }) => void;
  zipCode?: string;
}) => {
  const [selectedIndices, setSelectedIndices] = useState({
    cityIndex: 0,
    districtIndex: 0,
  });

  const handleLevelChange = (value: number, level: 'cityIndex' | 'districtIndex') => {
    setSelectedIndices((prevIndices) => ({
      ...prevIndices,
      [level]: value,
      ...(level === 'cityIndex' && { districtIndex: 0 }),
    }));
  };

  useEffect(() => {
    if (zipCode) {
      const cityIndex = districtJson.findIndex((cityData) =>
        cityData.districts.some((districts) => districts.zip === zipCode)
      );
      handleLevelChange(cityIndex, 'cityIndex');
      const districtIndex = districtJson[cityIndex].districts.findIndex(
        (district) => district.zip === zipCode
      );
      handleLevelChange(districtIndex, 'districtIndex');
    }
  }, [zipCode]);

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
        onChange={(e) => handleLevelChange(e.target.value as number, 'cityIndex')}
        data={districtJson.map((district, index) => ({ text: district.name, value: index }))}
      />
      <Selector
        value={selectedIndices.districtIndex}
        onChange={(e) => handleLevelChange(e.target.value as number, 'districtIndex')}
        data={districtJson[Number(selectedIndices.cityIndex)].districts.map((district, index) => ({
          text: district.name,
          value: index,
        }))}
      />
    </Stack>
  );
};

export default DistrictSelector;
