"use client";

// import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    onClose();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { loginUser } = useLogin();

  return (
    <div className='flex items-center justify-center bg-white p-4'>
      <div className='w-full max-w-md space-y-8'>
        <div className='space-y-6'>
          <h1 className='text-2xl font-semibold'>Login</h1>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
              <label htmlFor='email' className='block text-xl'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                // required
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter email address'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='password' className='block text-xl'>
                Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? "text" : "password"}
                  //   required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type='submit'
              onClick={() => loginUser()}
              className='w-full py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors'
            >
              Login
            </button>
          </form>

          <a
            href='/forgot-password'
            className='block text-center text-lg hover:underline'
          >
            Forgot password?
          </a>

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>or</span>
            </div>
          </div>

          <button
            type='button'
            className='w-full py-3 px-4 rounded-lg border border-gray-300 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors'
          >
            <svg className='h-6 w-6' viewBox='0 0 24 24'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
              />
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              />
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              />
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              />
            </svg>
            <span>Login with Google</span>
          </button>

          <p className='text-center text-lg'>
            Don't have an account?{" "}
            <a href='/signup' className='text-black hover:underline'>
              Click here to Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}