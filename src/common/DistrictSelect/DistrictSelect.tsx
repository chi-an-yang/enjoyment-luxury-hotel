import { useState } from 'react';
import { Stack } from '@mui/material';
import districtJson from '@src/common/DistrictSelect/config/taiwan_districts.json';
import Select from '@src/ui-components/Select';

export type DistrictData = { city: string; distinct: string; zipcode: number };

type DistrictSelectProps = {
  onChange: (value: DistrictData) => void;
  zipcode?: number;
};
const DistrictSelect = ({ onChange, zipcode }: DistrictSelectProps) => {
  const cityIndex = zipcode
    ? districtJson.findIndex((cityData) =>
        cityData.districts.some((districts) => districts.zip === zipcode.toString())
      )
    : 0;
  const districtIndex = zipcode
    ? districtJson[cityIndex].districts.findIndex((district) => district.zip === zipcode.toString())
    : 0;
  const [selectedIndices, setSelectedIndices] = useState({
    cityIndex,
    districtIndex,
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
      zipcode: Number(district.zip),
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
