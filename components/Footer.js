import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex space-x-4 mb-4">
          <li>
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-sm sm:text-base mb-4">© 2023 Your Company. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
