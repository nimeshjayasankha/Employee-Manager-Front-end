import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    /**
     * if you want to add header and footer to the every places, this is the place we can do that task
     * header -> body -> footer
     */
    <main>
      <ToastContainer />
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
