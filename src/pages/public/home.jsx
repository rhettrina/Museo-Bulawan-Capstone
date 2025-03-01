import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const home = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <h1>HOME</h1>
    </div>
  );
};

export default home;