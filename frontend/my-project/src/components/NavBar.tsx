// import React from 'react';
//
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import type { RootState } from '../store/store';
// import { logout as logoutService } from '../service/userService';
// import { useNavigate } from 'react-router-dom';
// import { logout as logoutAction } from '../store/slice/AuthSlice';
//
// const NavBar: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state: RootState) => state.auth.user);
//
//   const handleLogout = async () => {
//     try {
//       console.log('Calling logoutService...');
//       await logoutService();
//       console.log('Dispatching logoutAction...');
//       dispatch(logoutAction());
//       console.log('Navigating to /login...');
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//       alert('Logout failed. Please try again.');
//     }
//   };
//
//   if (!user) return null;
//
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Book Club Library</h1>
//         <div className="space-x-4">
//           <NavLink to="/home" className="hover:underline">Dashboard</NavLink>
//           <NavLink to="/readers" className="hover:underline">Readers</NavLink>
//           <NavLink to="/books" className="hover:underline">Books</NavLink>
//           <NavLink to="/lendings" className="hover:underline">Lendings</NavLink>
//           <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };
//
// export default NavBar;



// src/components/NavBar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { logout as logoutService } from '../service/userService';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '../store/slice/AuthSlice';
import { BookOpen, Menu, X } from 'lucide-react'; // Icons from lucide-react

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleLogout = async () => {
    try {
      await logoutService();
      dispatch(logoutAction());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!user) return null;

  return (
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand/Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-2xl font-bold tracking-tight">Book Club Library</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                        isActive ? 'text-blue-100 underline underline-offset-4' : ''
                    }`
                }
            >
              Dashboard
            </NavLink>
            <NavLink
                to="/readers"
                className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                        isActive ? 'text-blue-100 underline underline-offset-4' : ''
                    }`
                }
            >
              Readers
            </NavLink>
            <NavLink
                to="/books"
                className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                        isActive ? 'text-blue-100 underline underline-offset-4' : ''
                    }`
                }
            >
              Books
            </NavLink>
            <NavLink
                to="/lendings"
                className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                        isActive ? 'text-blue-100 underline underline-offset-4' : ''
                    }`
                }
            >
              Lendings
            </NavLink>
            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden bg-blue-700 py-4">
              <div className="container mx-auto px-4 flex flex-col space-y-4">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                            isActive ? 'text-blue-100 underline underline-offset-4' : ''
                        }`
                    }
                    onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
                <NavLink
                    to="/readers"
                    className={({ isActive }) =>
                        `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                            isActive ? 'text-blue-100 underline underline-offset-4' : ''
                        }`
                    }
                    onClick={toggleMenu}
                >
                  Readers
                </NavLink>
                <NavLink
                    to="/books"
                    className={({ isActive }) =>
                        `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                            isActive ? 'text-blue-100 underline underline-offset-4' : ''
                        }`
                    }
                    onClick={toggleMenu}
                >
                  Books
                </NavLink>
                <NavLink
                    to="/lendings"
                    className={({ isActive }) =>
                        `text-lg font-medium transition-all duration-300 hover:text-blue-200 ${
                            isActive ? 'text-blue-100 underline underline-offset-4' : ''
                        }`
                    }
                    onClick={toggleMenu}
                >
                  Lendings
                </NavLink>
                <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            </div>
        )}
      </nav>
  );
};

export default NavBar;