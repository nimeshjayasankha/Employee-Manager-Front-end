import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import * as Form from './Styled';
import CardList from './CardList';
import TableList from './TableList';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/useDispatch';
import { employeeLists, deleteEmployee } from '../../feature/EmployeeSlice';
import Loader from '../../components/common/Loader';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { StateValues } from '../../DTO/Employee';
import Search from './Search';
import Empty from '../../components/common/Empty';

const EmployeeLists: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isCardView, setIsCardView] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [searchBy, setSearchBy] = useState<string>('');
  const [sort, setSort] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('_id');

  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = {
      search,
      searchBy,
      sortBy,
      sort,
    };
    dispatch(employeeLists(searchParams));
  }, [dispatch, sortBy, sort, search, searchBy]);
  const { data, isLoading, isSuccess } = useSelector(
    (state: StateValues) => state.employee
  );

  const deleteRecord = (id: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteEmployee(id)),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const editEmployee = (id: string) => {
    navigate(`/employee/edit/${id}`);
  };

  const searchEmployee = () => {
    setSearch('');
    setSearchBy('');
  };

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
        searchEmployee={searchEmployee}
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
        <Form.EmployeeAddButton
          variant="contained"
          onClick={() => {
            navigate('/employee/add');
          }}
        >
          Add Employee
        </Form.EmployeeAddButton>
      </Grid>
      {data.length === 0 ? (
        <Empty />
      ) : isCardView ? (
        <CardList
          employees={data}
          deleteRecord={deleteRecord}
          editEmployee={editEmployee}
        />
      ) : (
        <TableList
          employees={data}
          deleteRecord={deleteRecord}
          editEmployee={editEmployee}
          changeSort={changeSort}
        />
      )}
    </Grid>
  );
};

export default EmployeeLists;
