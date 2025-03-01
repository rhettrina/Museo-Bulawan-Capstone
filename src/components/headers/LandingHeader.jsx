import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <header className="bg-transparent w-full shadow-sm fixed z-50">
      <div className='flex w-auto h-7 bg-[#1C1B19] justify-between px-5'>
        <span className=' text-white text-xs h-fit w-fit my-auto'>Open Daily 9:00am-5:00pm, Monday- Friday, Close During Holidays</span>
        <div className='w-auto'>
            <NavLink to="/" className='mx-2'>
              <span className='text-white text-xs my-auto cursor-pointer'>
                Home
              </span>
            </NavLink>

            <NavLink to="/news&events" className='mx-2'>
            <span className='text-white text-xs my-auto cursor-pointer'>
              News & Events
            </span>
            </NavLink>
            
            <NavLink to="/about" className='mx-2'>
            <span className='text-white text-xs my-auto cursor-pointer'>
              About
            </span>
            </NavLink>
        
        
            <NavLink to="/login" className='mx-2'>
              <span className='text-white text-xs my-auto cursor-pointer'>
                Login
              </span>
            </NavLink>

            
          </div>
      </div>

      
    </header>
  );
};

export default LandingHeader;