import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { EmployeeCreationProps } from '../../../DTO/Employee';
import InputBox from '../InputBox';
import GenderSelectBox from './GenderSelectBox';
import CreateUpdateButton from '../CreateUpdateButton';

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
          <InputBox
            label={'First Name'}
            control={control}
            error={errors?.first_name?.message}
            register_name={'first_name'}
          />
          <InputBox
            label={'Last Name'}
            control={control}
            error={errors?.last_name?.message}
            register_name={'last_name'}
          />
          <InputBox
            label={'Email'}
            control={control}
            error={errors?.email?.message}
            register_name={'email'}
          />
          <InputBox
            label={'Phone'}
            control={control}
            error={errors?.number?.message}
            register_name={'number'}
          />
          <GenderSelectBox control={control} error={errors?.gender?.message} />
          <CreateUpdateButton savingData={savingData} id={id} />
        </CardContent>
      </Card>
    </form>
  );
};

export default EmployeeForm;
