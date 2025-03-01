import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const about = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto z mx-auto pt-36 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" } }>
        <div className='mx-5 w-auto'>
          <h1>ABOUT</h1>
        </div>
      </div>
    </>
  );
};

export default about;