import { MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectorProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  data: { text: string; value: string | number }[];
}
const Selector = ({ value, onChange, data }: SelectorProps) => {
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {data.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;
