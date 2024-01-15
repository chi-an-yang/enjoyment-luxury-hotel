import { Stack } from '@mui/material';
import SelectorComponent from '../../../ui-components/Selector';

const SelectorComponents = () => {
  return (
    <Stack direction="column" spacing={1}>
      <SelectorComponent type="district"></SelectorComponent>
      <SelectorComponent type="date"></SelectorComponent>
    </Stack>
  );
};

export default SelectorComponents;
