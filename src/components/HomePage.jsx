import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (

    <div className="flex justify-center items-center h-screen bg-gray-100 lg:ml-[35vw] md:ml-[25vw]">
      <div className="text-center lg:w-[30vw] p-[10px]">
        <h1 className="text-2xl mb-4">Welcome to PopX</h1>
        <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/signup" className="bg-indigo-600 text-white py-2 px-4 rounded mb-2 block">Create Account</Link>
        <Link to="/login" className="bg-purple-400 text-white py-2 px-4 rounded mb-2 block">Already Registered? Login</Link>
        <Link to="/profile-settings" className="bg-purple-400 text-white py-2 px-4 mb-2 rounded block">Profile Page</Link>
      </div>
      </div>
   
    
  );
}

export default HomePage;
