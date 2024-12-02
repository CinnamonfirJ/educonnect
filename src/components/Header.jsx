import { Bell, ChevronDown, LogOut, Search } from "lucide-react";
import { useLogin } from "../hooks/useLogin";

const Header = () => {
  const { isLoggedIn, loginUser } = useLogin();
  return (
    <header className='border-b bg-[#E4E3E3]'>
      <div className='max-w-7xl py-4 sm:py-6 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0'>
          <div className='flex items-center w-full sm:w-auto justify-between sm:justify-start'>
            <a href='/' className='text-xl font-serif italic'>
              Educonnect
            </a>
            <div className='sm:hidden'>
              <button className='p-2 rounded-full hover:bg-gray-100'>
                <Bell className='h-5 w-5' />
              </button>
            </div>
          </div>

          <div className='w-full sm:flex-1 sm:max-w-2xl mx-0 sm:mx-4'>
            <div className='relative flex items-center'>
              <div className='relative inline-block'>
                <button className='flex items-center px-3 py-2 border-2 border-white rounded-l-md bg-white text-sm'>
                  <span className='hidden sm:inline'>Search By</span>
                  <span className='sm:hidden'>By</span>
                  <ChevronDown className='ml-2 h-6 w-4' />
                </button>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='flex-1 block w-full border-l-0 border-2 border-[#CACACA] py-2 px-4 rounded-r-md focus:outline-none'
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <Search className='h-4 w-4 text-gray-400' />
              </div>
            </div>
          </div>

          <div className='hidden sm:flex items-center space-x-4'>
            <button className='p-2 rounded-full hover:bg-gray-100'>
              <Bell className='h-5 w-5' />
            </button>

            {isLoggedIn ? (
              <div className='flex items-center space-x-4'>
                <img
                  src='/Frame 14.png'
                  alt='User avatar'
                  width={32}
                  height={32}
                  className='rounded-full'
                />
                <button>
                  <LogOut onClick={() => loginUser()} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => loginUser()}
                className='px-4 py-2 rounded-md border hover:bg-gray-100'
              >
                Login
              </button>
            )}
          </div>
          <div className='sm:hidden w-full'>
            {isLoggedIn ? (
              <div className='flex justify-end items-center space-x-4'>
                <img
                  src='/Frame 14.png'
                  alt='User avatar'
                  width={32}
                  height={32}
                  className='rounded-full'
                />
                <button>
                  <LogOut onClick={() => loginUser()} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => loginUser()}
                className='w-full px-4 py-2 rounded-md border hover:bg-gray-100'
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
