import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const login = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <h1>LOGIN</h1>
    </div>
  );
};

export default login;