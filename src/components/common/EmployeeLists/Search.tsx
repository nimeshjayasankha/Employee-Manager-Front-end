import { Grid, InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as Form from '../../../pages/EmployeeLists/Styled';
import { SearchEmployee } from '../../../DTO/Employee';

const Search = ({
  setSearch,
  search,
  searchBy,
  setSearchBy,
  clearSearch,
}: SearchEmployee) => {
  return (
    <>
      <Grid item md={3} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Search Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchBy}
            label="Search Options"
            onChange={(event: SelectChangeEvent) =>
              setSearchBy(event.target.value)
            }
          >
            <MenuItem value={'first_name'}>First Name</MenuItem>
            <MenuItem value={'last_name'}>Last Name</MenuItem>
            <MenuItem value={'email'}>Email</MenuItem>
            <MenuItem value={'number'}>Phone Number</MenuItem>
            <MenuItem value={'gender'}>Gender</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          autoComplete="off"
          id="phone"
          label="Type your search key word"
          fullWidth
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <Form.SearchButton
          variant="contained"
          disabled={search === '' && searchBy === ''}
          onClick={() => clearSearch()}
        >
          Clear
        </Form.SearchButton>
      </Grid>
    </>
  );
};

export default Search;
