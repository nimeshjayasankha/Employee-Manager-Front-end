import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as Form from './Styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import { EmployeeLists, SingleEmployee } from '../../DTO/Employee';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

const TableList = ({
  employees,
  deleteRecord,
  editEmployee,
  changeSort,
}: EmployeeLists) => {
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Form.TableHeader>
            <TableRow>
              <Form.TableCellColumn>Image</Form.TableCellColumn>
              <Form.TableCellColumn>
                First Name
                <Form.SortButton onClick={() => changeSort('first_name')}>
                  <SortByAlphaIcon />
                </Form.SortButton>
              </Form.TableCellColumn>
              <Form.TableCellColumn>
                Last Name
                <Form.SortButton onClick={() => changeSort('last_name')}>
                  <SortByAlphaIcon />
                </Form.SortButton>
              </Form.TableCellColumn>
              <Form.TableCellColumn>
                Email
                <Form.SortButton onClick={() => changeSort('email')}>
                  <SortByAlphaIcon />
                </Form.SortButton>
              </Form.TableCellColumn>
              <Form.TableCellColumn>
                Phone
                <Form.SortButton onClick={() => changeSort('number')}>
                  <SortByAlphaIcon />
                </Form.SortButton>
              </Form.TableCellColumn>
              <Form.TableCellColumn>
                Gender
                <Form.SortButton onClick={() => changeSort('gender')}>
                  <SortByAlphaIcon />
                </Form.SortButton>
              </Form.TableCellColumn>
              <Form.TableCellColumn align="right">Actions</Form.TableCellColumn>
            </TableRow>
          </Form.TableHeader>
          <TableBody>
            {employees.map((employee: SingleEmployee, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={employee.photo} alt="employee" width="100px" />
                </TableCell>
                <TableCell>{employee.first_name}</TableCell>
                <TableCell>{employee.last_name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.number}</TableCell>
                <TableCell>
                  {employee.gender === 'M' ? 'Male' : 'Female'}
                </TableCell>
                <TableCell align="right">
                  <Form.DynamicDeleteButton
                    onClick={() => deleteRecord(employee._id)}
                  >
                    <DeleteForeverIcon />
                  </Form.DynamicDeleteButton>
                  <Form.DynamicEditButton
                    onClick={() => editEmployee(employee._id)}
                  >
                    <EditIcon />
                  </Form.DynamicEditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableList;
