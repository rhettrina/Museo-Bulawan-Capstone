import { useState } from 'react'; // Add this import
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>

    </div>
  );
};

export default AdminHeader;