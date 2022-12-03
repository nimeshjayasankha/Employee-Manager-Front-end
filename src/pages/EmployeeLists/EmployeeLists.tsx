import React, { useEffect, useState, useCallback } from 'react';
import { Grid } from '@mui/material';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import * as Form from './Styled';
import CardList from '../../components/common/EmployeeLists/CardList';
import TableList from '../../components/common/EmployeeLists/TableList';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/useDispatch';
import {
  employeeLists,
  deleteEmployee,
  clearEmployeeLists,
} from '../../feature/EmployeeSlice';
import Loader from '../../components/common/Loader';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { StateValues } from '../../DTO/Employee';
import Search from '../../components/common/EmployeeLists/Search';
import Empty from '../../components/common/Empty';
import PrimaryButton from '../../components/common/PrimaryButton';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { debounce } from 'lodash';

const EmployeeLists: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isCardView, setIsCardView] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<string>('');
  const [sort, setSort] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('_id');
  const { data, isLoading, isSuccess } = useSelector(
    (state: StateValues) => state.employee
  );
  const getEmployeeLists = useCallback(
    debounce((searchParams) => {
      dispatch(employeeLists(searchParams))
        .unwrap()
        .then((data) => {
          console.info('successfully get the employee lists');
          return data;
        })
        .catch((obj) => {
          console.info('something went wrong in employee lists api');
          toast(obj.message, {
            position: 'top-right',
            autoClose: 1000,
            theme: 'light',
            type: 'error',
          });
        });
    }, 600),
    []
  );
  useEffect(() => {
    console.log('loading employee lists');
    const searchParams = {
      search,
      searchBy,
      sortBy,
      sort,
    };
    getEmployeeLists(searchParams);
    return () => {
      dispatch(clearEmployeeLists());
    };
  }, [dispatch, sortBy, sort, search, searchBy, getEmployeeLists]);

  const navigate = useNavigate();

  /**
   * if user clicks yes button employee record should be deleted and it should be remove from the redux state.
   * @param {number} id employee id
   */
  const deleteSingleEmployee = (id: string) => {
    console.info('called delete employee backend endpoint');
    dispatch(deleteEmployee(id))
      .then(unwrapResult)
      .then((data) => {
        console.info('successfully deleted the employee');
      })
      .catch((obj) => {
        console.error('something went wrong in the employee delete');
        toast(obj.message, {
          position: 'top-right',
          autoClose: 1000,
          theme: 'light',
          type: 'error',
        });
      });
  };
  const deleteRecord = (id: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteSingleEmployee(id),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  /**
   * navigate to the employee edit page with employee id
   * @param {number} id employee id
   */
  const navigateToEditPage = (id: string) => {
    navigate(`/employee/edit/${id}`);
  };
  /**
   * reset search employee
   */
  const clearSearch = () => {
    setSearch('');
    setSearchBy('');
  };
  /**
   * change the sort way
   * @param {string} type asc/desc
   */
  const changeSort = (type: string) => {
    setSortBy(type);
    setSort(sort === 'asc' ? 'desc' : 'asc');
  };

  if (isLoading) {
    return <Loader />;
  }
  if (!isSuccess) {
    return <Loader />;
  }
  return (
    <Grid container spacing={2} className="layout-content">
      <Search
        setSearch={setSearch}
        search={search}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        clearSearch={clearSearch}
      />

      <Grid item xs={12} md={3}>
        <Form.DynamicChangeButton
          onClick={() => {
            setIsCardView(!isCardView);
          }}
          role="change-viewer"
        >
          <ListSharpIcon />
        </Form.DynamicChangeButton>
        <PrimaryButton name="Add Employee" path="/employee/add" />
      </Grid>
      {data.length === 0 ? (
        <Empty />
      ) : isCardView ? (
        <CardList
          employees={data}
          deleteRecord={deleteRecord}
          navigateToEditPage={navigateToEditPage}
        />
      ) : (
        <TableList
          employees={data}
          deleteRecord={deleteRecord}
          navigateToEditPage={navigateToEditPage}
          changeSort={changeSort}
        />
      )}
    </Grid>
  );
};

export default EmployeeLists;
