import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { Controller } from 'react-hook-form';
import { EmployeeCreationProps } from '../../../DTO/Employee';

const EmployeeForm = ({
  handleSubmit,
  errors,
  control,
  savingData,
  id,
}: EmployeeCreationProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <div className="form-control">
            <label htmlFor="First Name" className="label-padding">
              First Name
            </label>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete="off"
                  {...field}
                  error={Boolean(errors?.first_name?.message)}
                  id="First Name"
                  label="First Name"
                  fullWidth
                />
              )}
            />
            <FormHelperText className="text-danger">
              {errors?.first_name?.message}
            </FormHelperText>
          </div>
          <div className="form-control">
            <label htmlFor="Last Name" className="label-padding">
              Last Name
            </label>
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete="off"
                  {...field}
                  error={Boolean(errors?.last_name?.message)}
                  id="last_name"
                  label="Last Name"
                  fullWidth
                />
              )}
            />
            <FormHelperText className="text-danger">
              {errors?.last_name?.message}
            </FormHelperText>
          </div>
          <div className="form-control">
            <label htmlFor="Email" className="label-padding">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete="off"
                  {...field}
                  error={Boolean(errors?.email?.message)}
                  id="email"
                  label="Email"
                  fullWidth
                />
              )}
            />
            <FormHelperText className="text-danger">
              {errors?.email?.message}
            </FormHelperText>
          </div>
          <div className="form-control">
            <label htmlFor="Phone" className="label-padding">
              Phone
            </label>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete="off"
                  {...field}
                  error={Boolean(errors?.number?.message)}
                  id="phone"
                  label="Phone"
                  fullWidth
                />
              )}
            />
            <FormHelperText className="text-danger">
              {errors?.number?.message}
            </FormHelperText>
          </div>
          <div className="form-control">
            <small className="label-padding-with-font-size">Gender</small>
            <FormControl fullWidth error={Boolean(errors?.gender?.message)}>
              <InputLabel id="demo-simple-select-error-label">
                Gender
              </InputLabel>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    label="Gender"
                    renderValue={(value) =>
                      ` ${value === 'M' ? 'Male' : 'Female'}`
                    }
                  >
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <FormHelperText className="text-danger">
              {errors?.gender?.message}
            </FormHelperText>
          </div>
          <div className="form-control">
            <Button variant="outlined" type="submit" disabled={savingData}>
              {id ? 'Save' : 'Add'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default EmployeeForm;
