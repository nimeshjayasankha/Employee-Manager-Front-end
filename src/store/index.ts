import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from '../feature/EmployeeSlice';

export const store = configureStore({
  reducer: {
    employee: EmployeeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
