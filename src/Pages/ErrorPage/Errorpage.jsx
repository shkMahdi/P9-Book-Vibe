import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-2xl max-w-sm w-full">
        
        {/* 404 */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-2">
          Page not found
        </p>
        <p className="text-sm text-gray-400 mb-6">
          The page you’re looking for doesn’t exist.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;