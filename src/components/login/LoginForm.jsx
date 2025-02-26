'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ onLoginSuccess }) {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  //method to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    //fixed credentials: username: "admin" and password: admin-dash
    if (username === 'admin' && password === 'admin-dash') {
      setLoginError('');
      onLoginSuccess();
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  //method to handle close iif close icon clicked
  const handleClose = () => {
    router.push('/');
  };

  return (
    <div className=" relative max-w-lg w-full  mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* close (x) icon */}
      <button
        className="absolute top-2 right-2 text-gray-600 font-bold hover:text-gray-900"
        aria-label="Close"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center">Please Login</h2>
      <form onSubmit={handleLogin}>
        {/* username */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Username</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-teal-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* password */}
        <div className="mb-6 relative">
          <label className="block mb-2 text-lg font-semibold">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-teal-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute insert-y-0 right-0 flex items-center pr-3 text-sm text-teal-600"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-4 py-3 rounded hover:bg-teal-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
