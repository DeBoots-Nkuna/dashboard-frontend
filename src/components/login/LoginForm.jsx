import React, { useState } from 'react';

export default function LoginForm({ onLoginSuccess }) {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

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

  return (
    <div className="max-w-lg w-full  mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Please Login</h2>
      <form onSubmit={handleLogin}>
        {/* username */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* password */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
