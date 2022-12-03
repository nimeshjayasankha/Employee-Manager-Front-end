import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { GenderSelectBoxProps } from '../../../DTO/Employee';

const GenderSelectBox = ({ control, error }: GenderSelectBoxProps) => {
  return (
    <div className="form-control">
      <small className="label-padding-with-font-size">Gender</small>
      <FormControl fullWidth error={Boolean(error)}>
        <InputLabel id="demo-simple-select-error-label">Gender</InputLabel>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              label="Gender"
              renderValue={(value) => ` ${value === 'M' ? 'Male' : 'Female'}`}
            >
              <MenuItem value={'M'}>Male</MenuItem>
              <MenuItem value={'F'}>Female</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormHelperText className="text-danger">{error}</FormHelperText>
    </div>
  );
};

export default GenderSelectBox;
