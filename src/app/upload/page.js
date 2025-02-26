'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import UploadData from '@/components/data/uploadData';
import LoginForm from '@/components/login/LoginForm';
export default function Upload() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  //method to logout
  const handleLogout = () => {
    router.push('/'); //redirecting to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* header with logout button */}
      {loggedIn && (
        <header className="bg-grey-800 text-white p-4 flex justify-end">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-teal-600 rounded hover:bg-teal-700 transition-colors"
          >
            Logout
          </button>
        </header>
      )}

      {/* display the login overlay */}
      {!loggedIn ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
        </div>
      ) : (
        <div className="container mx-auto p-6">
          <UploadData />
        </div>
      )}
    </div>
  );
}
