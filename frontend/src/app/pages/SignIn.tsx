import axios from 'axios';
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:27017/api/auth/sign-in', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('Sign in successful');
      window.location.href = '/';
    } catch (error) {
      alert('Sign in failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] min-h-[600px] shadow-lg rounded-lg bg-neutral-50 p-8 flex flex-col items-center">
        <h1 className="font-title text-2xl mb-4">Sign In</h1>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-4 p-2 border border-neutral-300 rounded-md"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mb-4 p-2 border border-neutral-300 rounded-md"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="bg-black text-white p-2 rounded-md mt-2" type="submit">
            Sign In
          </button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <span>Or sign in with</span>
          <div className="flex mt-2 space-x-2">
            <button className="bg-black text-white p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="bg-black text-white p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-primary">
            Forgot password?
          </a>
        </div>
        <div className="mt-2">
          <span>
            Don't have an account?{' '}
            <a href="/sign-up" className="text-primary">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
