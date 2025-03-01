import { useState } from 'react'; // Add this import
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Museo Bulawan
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                About
              </NavLink>
              {!isAuthenticated && (
                <NavLink
                  to="/login"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                About
              </NavLink>
              
              {!isAuthenticated && (
                <NavLink
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default LandingHeader;