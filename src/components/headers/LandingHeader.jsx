import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-sm fixed z-50">
      <nav className=" w-[100vw] bg-transparent">
        <div className='flex mx-20 h-28 bg-transparent  border-b-2 border-white justify-between'>
          <div className='flex'> 

            <img src="./assets/LOGO.png" alt="" className='max-h-20 my-auto'/>

            <div className='h-20 w-1 my-auto rounded-2xl bg-white ml-5'>
            </div>

            <Link to="/" className='my-auto leading-6 text-3xl font-bold ml-2 text-white'> 
                <h1>Museo </h1>
                <h1>Bulawan</h1>
            </Link>
          </div>

          <div className='my-auto text-2xl font-semibold shadow-black w-auto text-white'>
            <NavLink to="/" className='mx-2'>
              Home
            </NavLink>
            
            <NavLink to="/news&events" className='mx-2'>
              News & Events
            </NavLink>

            <NavLink to="/about" className='mx-2'>
              About
            </NavLink>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;