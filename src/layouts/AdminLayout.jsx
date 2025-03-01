
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/headers/AdminHeader';

const AdminLayout = () => (
  <>
    <AdminHeader />
    <main>
      <Outlet />
    </main>
    
  </>
);

export default AdminLayout;