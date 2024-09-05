import React from 'react';
import { FaBagShopping, FaUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-lg rounded-lg bg-neutral-50">
      <header className="flex justify-between items-center p-4 bg-black rounded-t-lg">
        <h1 className="font-title text-2xl text-white">Pathfinder</h1>
        <nav className="flex gap-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/store" className="text-white">
            Store
          </a>
          <a href="/about-us" className="text-white">
            About Us
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </nav>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer text-white">
            <FaSearch />
          </span>
          <span className="cursor-pointer text-white" onClick={() => navigate('/cart')}>
            <FaBagShopping />
          </span>
          <span className="cursor-pointer text-white">
            <FaUser />
          </span>
          <a href="/sign-in" className="bg-white text-black px-4 py-2 rounded-md">
            Sign In
          </a>
          <a href="/sign-up" className="bg-white text-black px-4 py-2 rounded-md">
            Sign Up
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
