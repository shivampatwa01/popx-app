import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

function ProfilePage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 lg:ml-[35vw] md:ml-[25vw]">
      <div className="lg:w-[30vw] p-[10px]">
        <h1 className="text-lg  mb-8">Profile Settings</h1>
        <div className="flex items-center mb-8">
          <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="font-bold">Shivam Patwa</p>
            <p className="text-gray-600">shivam@gmail.Com</p>
          </div>
        </div>
        <p className="text-left text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;