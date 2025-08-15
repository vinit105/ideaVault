
import React from "react";
import { useParams } from "react-router-dom";

const License: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">License Details</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          License details for Idea ID: <span className="font-bold">{id}</span>
        </p>
        {/* You can add more license info here based on the idea ID */}
      </div>
    </div>
  );
};

export default License;
