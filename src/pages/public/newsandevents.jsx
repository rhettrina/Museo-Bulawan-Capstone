import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NewsAndEvents = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='max-w-7xl mx-auto'>
        <h1>News And Events</h1>
    </div>
  );
};

export default NewsAndEvents;