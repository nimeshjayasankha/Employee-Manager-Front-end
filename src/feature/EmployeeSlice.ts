import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { END_POINT } from '../config';
type EmployeeState = {
  data: string[];
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  error: object;
  singleRecord: object;
};

type EmployeeParams = {
  search?: string;
  searchBy?: string;
};

//api call for get employee lists
export const employeeLists = createAsyncThunk(
  'employee/lists',
  async (searchParams: EmployeeParams, thunkApi) => {
    try {
      const response = await axios.get(`${END_POINT}employee/`, {
        params: { ...searchParams },
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      let err = error as AxiosError;
      throw err;
    }
  }
);

//api call for delete employee
export const deleteEmployee = createAsyncThunk(
  'employee/delete',
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`${END_POINT}employee/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      let err = error as AxiosError;
      throw err;
    }
  }
);

//api call for get single employee
export const singleEmployee = createAsyncThunk(
  'employee/single',
  async (id: string, thunkApi) => {
    try {
      const response = await axios.get(`${END_POINT}employee/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      let err = error as AxiosError;
      throw err;
    }
  }
);

const initialState: EmployeeState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  message: '',
  error: {},
  singleRecord: {},
};

const EmployeeListsSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    clearSingleEmployee: (state) => {
      state.singleRecord = {};
    },
    clearEmployeeLists: (state) => {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(employeeLists.pending, (state, action) => { 
        state.isLoading = true;
      })
      .addCase(employeeLists.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
        state.singleRecord = {};
      })
      .addCase(employeeLists.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
      });
    builder
      .addCase(deleteEmployee.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        deleteEmployee.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.data = state.data.filter(
            (employee: any) => employee._id !== action.payload.data._id
          );
        }
      )
      .addCase(deleteEmployee.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
      });

    builder
      .addCase(singleEmployee.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        singleEmployee.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.singleRecord = action.payload.data;
        }
      )
      .addCase(singleEmployee.rejected, (state, action: any) => {
        state.isLoading = false;
        state.message = action.error.message;
      });
  },
});
export const { clearSingleEmployee, clearEmployeeLists } =
  EmployeeListsSlice.actions;

export default EmployeeListsSlice.reducer;
