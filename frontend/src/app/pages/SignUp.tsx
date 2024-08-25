import axios from 'axios';
import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:27017/api/auth/sign-up', formData);
      alert('Sign up successful');
    } catch (error) {
      alert('Sign up failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] shadow-lg bg-neutral-50 p-6 rounded-lg">
        <h1 className="font-title text-2xl mb-2">Sign Up</h1>
        <p className="mb-6 text-sm">Join our e-commerce platform to enjoy exclusive deals and offers!</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            <div>
              <label htmlFor="first-name" className="block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="john.doe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="1234567890"
                pattern="\d*"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="reset"
              className="w-1/2 px-4 h-[44px] mr-2 bg-neutral-50 border border-neutral-400 rounded-md shadow-xs transition-transform duration-100 ease-in hover:bg-neutral-100 hover:-translate-y-0.5"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-1/2 px-4 h-[44px] ml-2 bg-black text-white rounded-md shadow-xs transition-transform duration-100 ease-in hover:bg-primary-400 hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
