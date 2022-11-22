import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as Form from './Styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import { EmployeeLists, SingleEmployee } from '../../DTO/Employee';

const CardList = ({ employees, deleteRecord, editEmployee }: EmployeeLists) => {
  return employees.map((employee: SingleEmployee, index: number) => (
    <Grid item xs={12} md={3} key={index}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          image={employee.photo}
          width="300"
        />
        <Form.CardContentArea>
          <Typography variant="body2" color="text.secondary">
            {employee.first_name} {employee.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.gender === 'M' ? 'Male' : 'Female'}
          </Typography>
          <Form.DynamicDeleteButton
            onClick={() => deleteRecord(employee._id)}
            role="delete-button"
          >
            <DeleteForeverIcon />
          </Form.DynamicDeleteButton>
          <Form.DynamicEditButton onClick={() => editEmployee(employee._id)}>
            <EditIcon />
          </Form.DynamicEditButton>
        </Form.CardContentArea>
      </Card>
    </Grid>
  ));
};

export default CardList;
