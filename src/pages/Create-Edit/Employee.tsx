import { useEffect } from 'react';
import EmployeeForm from '../../components/common/EmployeeForm/EmployeeForm';
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmployeeSchema from '../Schema/EmployeeSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import axios from 'axios';
import { END_POINT } from '../../config';
import { useAppDispatch } from '../../store/useDispatch';
import {
  clearSingleEmployee,
  singleEmployee,
} from '../../feature/EmployeeSlice';
import { useSelector } from 'react-redux';
import { SingleEmployee, StateValues } from '../../DTO/Employee';
import { backendValidation } from '../../utils/Backend-Validation';
import { ErrorResponse, OnError } from '../../DTO/Common';
import PrimaryButton from '../../components/common/PrimaryButton';
import { unwrapResult } from '@reduxjs/toolkit';
import { errorAlert, successAlert } from '../../components/common/Toast';

const EmployeeAddEdit = () => {
  const { singleRecord } = useSelector((state: StateValues) => state.employee);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  /**
   * declare default values for employee form and schema validation for employee creation
   */
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<SingleEmployee>({
    resolver: yupResolver(EmployeeSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      number: '',
      gender: '',
    },
  });
  /**
   * get single employee details for given id and it set to the form
   */
  useEffect(() => {
    if (id) {
      dispatch(singleEmployee(id))
        .then(unwrapResult)
        .then((data) => {})
        .catch((obj) => {
          errorAlert(obj.message ?? 'Something went wrong');
        });
    }
    return () => {
      dispatch(clearSingleEmployee());
    };
  }, [dispatch, id]);
  useEffect(() => {
    if (singleRecord) {
      const { first_name, last_name, email, number, gender, photo } =
        singleRecord;
      const data = {
        first_name,
        last_name,
        email,
        number,
        gender,
        photo,
      };
      reset(data);
    }
  }, [singleRecord, reset]);

  /**
   * if employee data successfully saved or update this success function triggered
   */
  const successfullySaved = () => {
    successAlert(`Employee Successfully ${id ? 'updated' : 'saved'}`);
    reset();
    navigate('/employee/list');
  };
  /**
   * this function trigger for backend validations
   * @typedef ErrorResponse
   * @prop {object} error employee validation object
   */
  const throwBackendValidation = (error: ErrorResponse) => {
    if (error?.status === 422) {
      for (const property in error?.data) {
        backendValidation(setError, property, error?.data[property]?.message);
      }
    }
  };
  /**
   * backend api call for saving or updating data
   * @typedef SingleEmployee
   * @prop {string} _id The employee id
   * @prop {string} first_name The first name
   * @prop {string} last_name The last name
   * @prop {string} email The email
   * @prop {string} number The number
   * @prop {string} gender The gender
   * @prop {string} photo The photo
   */
  const saveEmployee = async (data: SingleEmployee) => {
    if (id) {
      return axios.put(`${END_POINT}employee/${id}`, data);
    }
    return axios.post(`${END_POINT}employee/`, data);
  };
  const { mutate, isLoading } = useMutation(saveEmployee, {
    onError: (error: OnError) => {
      throwBackendValidation(error.response);
      if (error?.response?.status !== 422) {
        errorAlert(error.message ?? 'Something went wrong');
      }
    },
    onSuccess: successfullySaved,
  });
  const onSubmit = (data: SingleEmployee) => {
    mutate(data);
  };
  return (
    <Grid container spacing={2} className="layout-content">
      <Grid item xs={12}>
        <PrimaryButton name="List View" path="/employee/list" />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <EmployeeForm
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          savingData={isLoading}
          id={id}
        />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
};

export default EmployeeAddEdit;
