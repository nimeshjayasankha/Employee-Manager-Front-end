import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as Form from '../../../pages/EmployeeLists/Styled';
import { Grid } from '@mui/material';
import { EmployeeLists, SingleEmployee } from '../../../DTO/Employee';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

const CardList = ({
  employees,
  deleteRecord,
  navigateToEditPage,
}: EmployeeLists) => {
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
          <DeleteButton onClick={deleteRecord} id={employee._id} />
          <EditButton onClick={navigateToEditPage} id={employee._id} />
        </Form.CardContentArea>
      </Card>
    </Grid>
  ));
};

export default CardList;
