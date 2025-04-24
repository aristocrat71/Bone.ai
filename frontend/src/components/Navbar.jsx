
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
    <ul className="flex space-x-6">
      <li><Link to="/" className="hover:underline">About</Link></li>
      <li><Link to="/dashboard" className="hover:underline">Upload</Link></li>
      <li><Link to="/report" className="hover:underline">Report</Link></li>
    </ul>
  </nav>
);

export default Navbar;
