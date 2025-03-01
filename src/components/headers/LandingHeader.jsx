import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled down
  const [isTextVisible, setIsTextVisible] = useState(true); // State to track visibility of the text

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if the user is at the top of the page
    if (currentScrollY > 50) {
      setIsScrolled(true); // Add shadow and change background
      setIsTextVisible(true); // Hide text
    } else {
      setIsScrolled(false); // Remove shadow and reset background
      setIsTextVisible(false); // Show text
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup scroll event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1B19] shadow-lg' : 'bg-transparent shadow-none'
        }`}
    >
      <div className="flex w-auto h-7 justify-between px-5">
        <span className="text-white text-xs h-fit w-fit my-auto">
          Open Daily 9:00am-5:00pm, Monday- Friday, Close During Holidays
        </span>
        <div className="w-auto">
          <NavLink to="/" className="mx-2">
            <span
              className={`text-white text-xs my-auto cursor-pointer transition-opacity duration-300 ${isTextVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              Home
            </span>
          </NavLink>

          <NavLink to="/news&events" className="mx-2">
            <span
              className={`text-white text-xs my-auto cursor-pointer transition-opacity duration-300 ${isTextVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              News & Events
            </span>
          </NavLink>

          <NavLink to="/about" className="mx-2">
            <span
              className={`text-white text-xs my-auto cursor-pointer transition-opacity duration-300 ${isTextVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              About
            </span>
          </NavLink>

          <NavLink to="/login" className="mx-2">
            <span className="text-white text-xs my-auto cursor-pointer">
              Login
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
