import { FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { InputBoxProps } from '../../DTO/InputBoxProps';

/**
 * common component for all input box
 * this component accept label name control error and field name
 */
function InputBox({ label, control, error, register_name }: InputBoxProps) {
  return (
    <div className="form-control">
      <label htmlFor={label} className="label-padding">
        {label}
      </label>
      <Controller
        name={register_name}
        control={control}
        render={({ field }) => (
          <TextField
            autoComplete="off"
            {...field}
            error={Boolean(error)}
            id={label}
            label={label}
            fullWidth
          />
        )}
      />
      <FormHelperText className="text-danger">{error}</FormHelperText>
    </div>
  );
}

export default InputBox;
