import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-4">Oops! Page not found.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Home
      </a>
    </div>
  );
};

export default NotFound;
