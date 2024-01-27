import { useState } from 'react';
import { Stack } from '@mui/material';
import districtJson from '@src/common/DistrictSelect/config/taiwan_districts.json';
import Select from '@src/ui-components/Select';

export type DistrictSelectProps = { city: string; distinct: string; zipCode: string };
const DistrictSelect = ({
  onChange,
  zipCode,
}: {
  onChange: (value: DistrictSelectProps) => void;
  zipCode?: string;
}) => {
  const cityIndex = zipCode
    ? districtJson.findIndex((cityData) =>
        cityData.districts.some((districts) => districts.zip === zipCode)
      )
    : 0;
  const districtIndex = zipCode
    ? districtJson[cityIndex].districts.findIndex((district) => district.zip === zipCode)
    : 0;
  const [selectedIndices, setSelectedIndices] = useState({
    cityIndex: cityIndex,
    districtIndex: districtIndex,
  });

  const handleLevelChange = (value: number, level: 'cityIndex' | 'districtIndex') => {
    const newSelectedIndices = {
      ...selectedIndices,
      [level]: value,
      ...(level === 'cityIndex' && { districtIndex: 0 }),
    };
    setSelectedIndices(newSelectedIndices);

    const city = districtJson[newSelectedIndices.cityIndex];
    const district = city.districts[newSelectedIndices.districtIndex];

    onChange({
      city: city.name,
      distinct: district.name,
      zipCode: district.zip,
    });
  };

  return (
    <Stack direction="row" spacing={1}>
      <Select
        value={selectedIndices.cityIndex}
        onChange={(e) => handleLevelChange(e.target.value as number, 'cityIndex')}
        data={districtJson.map((district, index) => ({ text: district.name, value: index }))}
      />
      <Select
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

export default DistrictSelect;
