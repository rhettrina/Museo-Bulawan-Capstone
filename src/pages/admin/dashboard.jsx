import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>

    </div>
  );
};

export default dashboard;