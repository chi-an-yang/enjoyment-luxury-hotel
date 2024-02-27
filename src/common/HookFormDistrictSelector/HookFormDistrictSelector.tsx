import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import DistrictSelect, { DistrictData } from '../DistrictSelect';

const HookFormDistrictSelector = <T extends FieldValues>(props: UseControllerProps<T>) => {
  const {
    field: { onChange, value },
  } = useController(props);

  const handleChange = (district: DistrictData) => {
    onChange(district.zipcode);
  };

  return <DistrictSelect onChange={handleChange} zipcode={value} />;
};

export default HookFormDistrictSelector;
