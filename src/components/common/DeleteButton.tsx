import * as Form from './Styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DeleteButtonProps } from '../../DTO/ButtonProps';

//common delete button accept edit function and id
const DeleteButton = ({ onClick, id }: DeleteButtonProps) => {
  return (
    <Form.DynamicDeleteButton onClick={() => onClick(id)} role="delete-button">
      <DeleteForeverIcon />
    </Form.DynamicDeleteButton>
  );
};

export default DeleteButton;
