import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled
  const [isTextVisible, setIsTextVisible] = useState(true); // State to track visibility of the text
  const [lastScrollY, setLastScrollY] = useState(0); // State to track the last scroll position

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Change background color based on scroll position
    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide text when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsTextVisible(false);
    } else {
      setIsTextVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup scroll event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full shadow-sm fixed z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#1C1B19]' : 'bg-transparent'
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