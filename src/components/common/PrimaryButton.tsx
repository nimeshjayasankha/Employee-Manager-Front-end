import { AddButtonProps } from '../../DTO/ButtonProps';
import * as Form from './Styled';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ name, path }: AddButtonProps) => {
  const navigate = useNavigate();
  return (
    <Form.EmployeeAddButton
      variant="contained"
      onClick={() => {
        navigate(path);
      }}
    >
      {name}
    </Form.EmployeeAddButton>
  );
};

export default PrimaryButton;
