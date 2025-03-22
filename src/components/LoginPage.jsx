import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100 lg:ml-[35vw] md:ml-[25vw]">
      <div className="text-center lg:w-[30vw] p-[10px]">
        <h1 className="text-2xl mb-4">Signin to your PopX account</h1>
        <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="text-left">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded w-full">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage;