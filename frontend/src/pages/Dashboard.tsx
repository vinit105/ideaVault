import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome, <span className="font-semibold">{user?.name}</span>!</p>
        <p className="mt-2 text-gray-600">Your email: {user?.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
