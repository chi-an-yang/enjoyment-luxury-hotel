import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import DateSelect from '../DateSelect';

const HookFormDateSelector = <T extends FieldValues>(props: UseControllerProps<T>) => {
  const {
    field: { onChange, value },
  } = useController(props);

  return <DateSelect onChange={onChange} value={value} />;
};

export default HookFormDateSelector;
