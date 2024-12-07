// import Link from "next/link";
import {
  Eye,
  EyeOff,
  HelpCircle,
  Home,
  Menu,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Mobile sidebar toggle */}
          <button
            className='md:hidden mb-4 p-2 bg-white rounded-md shadow'
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className='h-6 w-6' />
          </button>

          {/* Sidebar */}
          <nav
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-48 space-y-1 mb-4 md:mb-0`}
          >
            <a
              href='/'
              className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
            >
              <Home className='mr-3 h-5 w-5' />
              Home
            </a>
            <a
              href='/questions'
              className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
            >
              <MessageSquare className='mr-3 h-5 w-5' />
              Questions
            </a>
            <a
              href='/answers'
              className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
            >
              <MessageSquare className='mr-3 h-5 w-5' />
              Answers
            </a>
            <a
              href='/leaderboards'
              className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100 bg-gray-100'
            >
              <Trophy className='mr-3 h-5 w-5' />
              Leaderboards
            </a>
            <a
              href='/faqs'
              className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
            >
              <HelpCircle className='mr-3 h-5 w-5' />
              FAQs
            </a>
          </nav>

          {/* Main Content */}
          <main className='flex flex-1 justify-center'>
            <div className='w-full max-w-xl space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-2xl font-semibold'>Signup</h1>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='block text-xl'>
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter name'
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='block text-xl'>
                      Email address
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
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
                        required
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
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='confirmPassword' className='block text-xl'>
                      Confirm Password
                    </label>
                    <div className='relative'>
                      <input
                        id='confirmPassword'
                        name='password'
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='Enter password'
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='block text-xl'>School Level</label>
                    <div className='flex gap-4'>
                      <button
                        type='button'
                        onClick={() => setSelectedLevel("junior")}
                        className={`px-5 py-2 text-sm rounded-full border border-black ${
                          selectedLevel === "junior"
                            ? "bg-[#FFE4AC]"
                            : "bg-white"
                        }`}
                      >
                        Junior Secondary
                      </button>
                      <button
                        type='button'
                        onClick={() => setSelectedLevel("senior")}
                        className={`px-5 py-2 text-sm rounded-full border border-black ${
                          selectedLevel === "senior"
                            ? "bg-[#FFE4AC]"
                            : "bg-white"
                        }`}
                      >
                        Senior Secondary
                      </button>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='w-full py-3 rounded-lg bg-[#FFE4AC] hover:bg-white border border-black transition-colors duration-100'
                  >
                    Signup
                  </button>
                </form>

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
                  className='w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 bg-[#FFE4AC] hover:bg-white border border-black transition-colors duration-100'
                >
                  <span>Login with Google</span>
                  <svg
                    width='21'
                    height='22'
                    viewBox='0 0 21 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5051 9.36362C17.2382 9.36201 13.9712 9.36281 10.7043 9.36319C10.7047 10.7182 10.7027 12.0733 10.7051 13.4279C12.5971 13.4275 14.4891 13.4271 16.3807 13.4279C16.1614 14.7264 15.3898 15.9138 14.2955 16.6448C13.6075 17.1073 12.8172 17.4076 12.0024 17.5503C11.1823 17.6903 10.3349 17.7082 9.51686 17.5426C8.68498 17.3766 7.89089 17.03 7.19816 16.5414C6.09047 15.7632 5.24513 14.6246 4.81109 13.3432C4.36727 12.0399 4.36401 10.5896 4.81312 9.2875C5.12473 8.36976 5.6434 7.522 6.32474 6.8321C7.16518 5.97173 8.25784 5.35667 9.43507 5.10445C10.4431 4.88928 11.506 4.93034 12.493 5.22891C13.3318 5.48359 14.1051 5.94324 14.7385 6.54814C15.3787 5.91149 16.0158 5.2712 16.6549 4.63337C16.9901 4.29005 17.3424 3.96176 17.667 3.60908C16.6964 2.71086 15.5586 1.98883 14.3154 1.5324C12.0772 0.708683 9.55306 0.691199 7.29984 1.47106C4.76063 2.34036 2.59851 4.23925 1.39973 6.63936C0.982366 7.46638 0.677653 8.34911 0.494606 9.25706C0.0341076 11.5192 0.355076 13.9311 1.3985 15.9915C2.07663 17.3364 3.04885 18.5319 4.22816 19.4692C5.34076 20.3564 6.63758 21.0117 8.01256 21.3775C9.74753 21.8428 11.5944 21.8322 13.3408 21.4348C14.9191 21.0716 16.4124 20.3174 17.6047 19.2166C18.865 18.0584 19.764 16.5325 20.2399 14.8928C20.759 13.1041 20.8306 11.1946 20.5051 9.36362Z'
                      fill='black'
                    />
                  </svg>
                </button>

                {/* <p className='text-center text-lg'>
            Don't have an account?{" "}
            <a href='/signup' className='text-black hover:underline'>
              Click here to Sign up
            </a>
          </p> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
