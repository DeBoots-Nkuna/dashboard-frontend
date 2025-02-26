'use client';

import React, { useState } from 'react';
import UploadData from '@/components/data/uploadData';
import LoginForm from '@/components/login/LoginForm';

export default function Upload() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 justify-center">
      {/* main background bg */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to GEDA Dashboard
        </h1>
      </div>

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
