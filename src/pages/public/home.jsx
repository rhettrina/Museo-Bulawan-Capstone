import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const home = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-auto z mx-auto pt-28 min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>
      <div>
      <h1>HOME</h1>
      </div>
        
    </div>
  );
};

export default home;