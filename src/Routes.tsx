import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Employee from './pages/Create-Edit/Employee';
import EmployeeLists from './pages/EmployeeLists/EmployeeLists';

const RouteLists = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/employee/list" />} />
        <Route path="/employee/list" element={<EmployeeLists />}></Route>
        <Route path="/employee/add" element={<Employee />}></Route>
        <Route path="/employee/edit/:id" element={<Employee />}></Route>
      </Route>
    </Routes>
  );
};

export default RouteLists;
