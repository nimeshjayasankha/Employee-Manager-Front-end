import EditIcon from '@mui/icons-material/Edit';
import { EditButtonProps } from '../../DTO/ButtonProps';
import * as Form from './Styled';

const EditButton = ({ onClick, id }: EditButtonProps) => {
  return (
    <Form.DynamicEditButton onClick={() => onClick(id)}>
      <EditIcon />
    </Form.DynamicEditButton>
  );
};

export default EditButton;
