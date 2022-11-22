import { useState, useEffect } from 'react';
import EmployeeForm from '../../components/common/EmployeeForm/EmployeeForm';
import { Grid } from '@mui/material';
import * as Form from './Styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmployeeSchema from '../Schema/EmployeeSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import axios from 'axios';
import { END_POINT } from '../../config';
import { useAppDispatch } from '../../app/useDispatch';
import { singleEmployee } from '../../feature/EmployeeSlice';
import { useSelector } from 'react-redux';
import { SingleEmployee, StateValues } from '../../DTO/Employee';
import { backendValidation } from '../../utils/Backend-Validation';
import { ErrorResponse, OnError } from '../../DTO/Common';
import AlertMessage from '../../components/common/AlertMessage';

const EmployeeAdd = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(singleEmployee(id));
    }
  }, [dispatch, id]);
  const { singleRecord } = useSelector(
    (state: StateValues) => state.employee
  );
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

  const mutationOnSuccess = () => {
    setPopUpOpen(!popUpOpen);
    reset();
    navigate('/employee/list');
  };
  const mutationOnError = (error: ErrorResponse) => {
    if (error.status === 500) {
      return (
        <AlertMessage
          popUpOpen={popUpOpen}
          message="Something went wrong!"
          error={'error'}/>
      );
    }
    if (error.status === 422) {
      for (const property in error?.data) {
        backendValidation(setError, property, error?.data[property]?.message);
      }
    }
  };

  const employee = async (data: SingleEmployee) => {
    if (id) {
      return axios.put(`${END_POINT}employee/${id}`, data);
    }
    return axios.post(`${END_POINT}employee/`, data);
  };
  const { mutate, isLoading } = useMutation(employee, {
    onError: (error: OnError) => {
      mutationOnError(error.response);
    },
    onSuccess: mutationOnSuccess,
  });
  const onSubmit = (data: SingleEmployee) => {
    mutate(data);
  };
  return (
    <Grid container spacing={2} className="layout-content">
      {id &&
        singleRecord &&
        Object.keys(singleRecord).length === 0 &&
        Object.getPrototypeOf(singleRecord) === Object.prototype && (
          <AlertMessage
            popUpOpen={true}
            message="Something went wrong!"
            error={'error'}
          />
        )}

      <Grid item xs={12}>
        <Form.EmployeeAddButton
          variant="contained"
          onClick={() => {
            navigate('/employee/list');
          }}
        >
          List View
        </Form.EmployeeAddButton>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <EmployeeForm
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          savingData={isLoading}
          id={id}
        />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default EmployeeAdd;
