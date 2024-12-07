import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronDown, LogOut, Search, User } from "lucide-react";
import { useLogin } from "../hooks/useLogin";
import Modal from "./Modal";
import Login from "./Login";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, loginUser } = useLogin();
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleModal = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className='border-b bg-[#224373]'>
      <div className='max-w-7xl py-4 sm:py-6 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0'>
          <div className='flex items-center w-full sm:w-auto justify-between sm:justify-start'>
            <a href='/' className='text-xl text-[#D6E3FF] font-serif italic'>
              Educonnect
            </a>
            <div className='sm:hidden'>
              <button
                className='p-2 rounded-full hover:bg-gray-100'
                onClick={() => setShowNotifications((prev) => !prev)}
              >
                <Bell className='h-5 w-5' />
              </button>
            </div>
          </div>

          <div className='w-full sm:flex-1 sm:max-w-2xl mx-0 sm:mx-4'>
            <form
              onSubmit={handleSearch}
              className='relative flex items-center'
            >
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
                className='flex-1 block w-full border-l-0 border-2 bg-transparent border-[#CACACA] text-white py-2 px-4 rounded-r-md focus:outline-none'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type='submit'
                className='absolute inset-y-0 right-0 flex items-center pr-3'
              >
                <Search className='h-4 w-4 text-white' />
              </button>
            </form>
          </div>

          <div className='hidden sm:flex items-center space-x-4 relative'>
            {/* Notification Dropdown */}
            <button
              className='p-2 rounded-full hover:bg-gray-100'
              onClick={() => setShowNotifications((prev) => !prev)}
            >
              <Bell className='h-5 w-5' />
            </button>
            {showNotifications && (
              <div className='absolute top-12 right-20 w-64 z-10 bg-white border rounded-lg shadow-lg'>
                <div className='p-4 border-b'>
                  <strong>4 notifications unread</strong>
                </div>
                <ul className='divide-y'>
                  <li className='p-4'>
                    <strong>Posted a question</strong>
                    <p>Your question post has been approved!</p>
                  </li>
                  <li className='p-4'>
                    <strong>Gotten an answer</strong>
                    <p>You have an answer from Adeking47!</p>
                  </li>
                  <li className='p-4'>
                    <strong>Level Up! - Master</strong>
                    <p>You've reached a new level of expertise!</p>
                  </li>
                  <li className='p-4'>
                    <strong>New Comment from Peter</strong>
                  </li>
                </ul>
              </div>
            )}

            {/* Profile Dropdown */}
            {isLoggedIn ? (
              <div className='relative flex gap-2'>
                <button
                  className='flex items-center space-x-2'
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                >
                  <img
                    src='/Frame 14.png'
                    alt='User avatar'
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                  <ChevronDown className='h-4 w-4' />
                </button>
                <button>
                  <LogOut onClick={() => loginUser()} />
                </button>
                {showProfileMenu && (
                  <div className='absolute right-10 top-10 w-48 bg-white border rounded-lg shadow-lg'>
                    <ul className='divide-y'>
                      <a href='/profile'>
                        <li className='p-4 hover:bg-gray-100'>
                          <button className='flex items-center space-x-2'>
                            <User className='h-5 w-5' />
                            <span>Profile</span>
                          </button>
                        </li>
                      </a>
                      <li className='p-4 hover:bg-gray-100'>
                        <button className='flex items-center space-x-2'>
                          <span>My Questions</span>
                        </button>
                      </li>
                      <li className='p-4 hover:bg-gray-100'>
                        <button className='flex items-center space-x-2'>
                          <span>My Answers</span>
                        </button>
                      </li>
                      <li className='p-4 hover:bg-gray-100'>
                        <button className='flex items-center space-x-2'>
                          <span>Settings</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleModal()}
                className='px-4 py-2 rounded-md bg-[#FFE4AC] hover:bg-gray-100'
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleModal}>
        <Login onClose={handleModal} />
      </Modal>
    </header>
  );
};

export default Header;
