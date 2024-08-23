import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] shadow-lg bg-neutral-50 p-6 rounded-lg">
        <h1 className="font-title text-2xl mb-2">Sign Up</h1>
        <p className="mb-6 text-sm">Join our e-commerce platform to enjoy exclusive deals and offers!</p>
        <form className="space-y-6">
          <div className="flex flex-col space-y-6">
            <div>
              <label htmlFor="first-name" className="block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="Doe"
                required
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
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-4 h-[44px] border rounded-md"
                placeholder="••••••••"
                required
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
