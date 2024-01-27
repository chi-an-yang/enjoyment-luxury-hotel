import { MenuItem, FormControl } from '@mui/material';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';

interface SelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  data: { text: string; value: string | number }[];
}
const Select = ({ value, onChange, data }: SelectProps) => {
  return (
    <FormControl fullWidth>
      <MuiSelect
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
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
