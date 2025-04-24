import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Upload', path: '/dashboard' },
    { name: 'Report', path: '/report' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-10 py-6 shadow-md">
      <div className="flex justify-between items-center">

        <div className="text-3xl font-bold tracking-wide">
          <Link to="/" className="hover:text-blue-400 transition duration-200">Bone.ai</Link>
        </div>

        <ul className="flex space-x-8">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`text-lg font-medium transition duration-200 hover:text-blue-400 ${
                  location.pathname === path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
