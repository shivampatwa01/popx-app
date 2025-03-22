import React, { useState } from 'react';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('yes');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log('Creating account with:', {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 lg:ml-[35vw] md:ml-[25vw]">
      <div className="text-center lg:w-[30vw] p-[10px]">
        <h1 className="text-2xl mb-4">Create your PopX account</h1>
        <form onSubmit={handleCreateAccount} className="space-y-4">
          <div className="text-left">
            <label className="block mb-1">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="text-left">
            <label className="block mb-1">Phone number</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="text-left">
            <label className="block mb-1">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="text-left">
            <label className="block mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="text-left">
            <label className="block mb-1">Company name</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="text-left">
            <label className="block mb-1">Are you an Agency?</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" value="yes" checked={isAgency === 'yes'} onChange={() => setIsAgency('yes')} />
                Yes
              </label>
              <label>
                <input type="radio" value="no" checked={isAgency === 'no'} onChange={() => setIsAgency('no')} />
                No
              </label>
            </div>
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded w-full">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;