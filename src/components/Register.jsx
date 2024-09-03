import React from 'react'

const Register = ({openLogin}) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
            <form className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-700 font-semibold mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
             
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button className="text-blue-600 hover:underline font-semibold" onClick={openLogin}>Log in</button>
            </div>
          </div>
        </div>
      );
    };

export default Register