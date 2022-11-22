import { FormEventHandler } from 'react';
import { Control, FieldErrorsImpl } from 'react-hook-form';

export interface EmployeeLists {
  employees: any;
  deleteRecord: Function;
  editEmployee: Function;
  changeSort?: any;
}

export interface SingleEmployee {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

export interface StateValues {
  employee: EmployeeState;
}

export interface EmployeeState {
  data: string[];
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  error: object;
  singleRecord: SingleEmployee;
}

export interface EmployeeCreationProps {
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  errors: Partial<
    FieldErrorsImpl<{
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      number: string;
      gender: string;
      photo: string;
    }>
  >;
  control: Control<SingleEmployee> | undefined;
  savingData: boolean;
  id?: string;
}

export interface SearchEmployee {
  setSearch: Function;
  search: string;
  searchBy: string;
  setSearchBy: Function;
  searchEmployee: Function;
}
