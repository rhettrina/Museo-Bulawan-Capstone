
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/headers/AdminHeader';

const AdminLayout = () => (
  <>
    <AdminHeader />
    <main>
      <Outlet />
    </main>
    <AdminFooter />
  </>
);

export default AdminLayout;