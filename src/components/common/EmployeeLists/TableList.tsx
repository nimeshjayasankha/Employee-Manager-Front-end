import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as Form from '../../../pages/EmployeeLists/Styled';
import { Grid } from '@mui/material';
import { EmployeeLists, SingleEmployee } from '../../../DTO/Employee';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

const TableList = ({
  employees,
  deleteRecord,
  navigateToEditPage,
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
                  <DeleteButton onClick={deleteRecord} id={employee._id} />
                  <EditButton onClick={navigateToEditPage} id={employee._id} />
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
