import React from 'react';

const Login = ({openSignUp}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="flex items-center text-gray-700">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button className="text-blue-600 hover:underline font-semibold"
          onClick={openSignUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
