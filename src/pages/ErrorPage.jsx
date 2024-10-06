import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="mt-2 text-lg text-gray-700">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-5 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go Back to Home
            </Link>
        </div>
    );
};


