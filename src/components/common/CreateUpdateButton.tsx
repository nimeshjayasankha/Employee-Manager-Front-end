import { Button } from '@mui/material';
import { SaveAndUpdateButton } from '../../DTO/ButtonProps';

//common create/update button accept save/edit function and id
const CreateUpdateButton = ({ savingData, id }: SaveAndUpdateButton) => {
  return (
    <div className="form-control">
      <Button variant="outlined" type="submit" disabled={savingData}>
        {id ? 'Save' : 'Add'}
      </Button>
    </div>
  );
};

export default CreateUpdateButton;
