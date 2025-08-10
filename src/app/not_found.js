'use client'
import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
            <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Oops! Page Not Found
            </h2>
            <p className="mt-2 text-gray-600 max-w-md text-center">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </main>
    )
}

export default NotFound
