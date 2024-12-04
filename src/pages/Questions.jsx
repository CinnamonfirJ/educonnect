import {
  Bell,
  ChevronDown,
  Home,
  Menu,
  MessageSquare,
  Trophy,
  HelpCircle,
  Search,
  ArrowUp,
  ArrowDown,
  Share2,
  SortDesc,
} from "lucide-react";
import { useState } from "react";

// import a from "next/link";
// import Image from "next/image";

const Questions = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const subjects = [
    { value: "", label: "Subject", disabled: true, selected: true },
    { value: "mathematics", label: "Mathematics" },
    { value: "english", label: "English Language" },
    { value: "science", label: "Basic Science" },
    { value: "technology", label: "Basic Technology" },
    { value: "agriculture", label: "Agricultural Science" },
    { value: "business", label: "Business Studies" },
    { value: "values", label: "National Values" },
    { value: "ict", label: "ICT" },
    { value: "phe", label: "PHE" },
    { value: "french", label: "French Language" },
    { value: "arts", label: "Creative Arts" },
    { value: "irs", label: "Religion - IRS" },
    { value: "crs", label: "Religion - CRS" },
    { value: "history", label: "History" },
    { value: "pre-vocational", label: "Pre-Vocational Studies" },
    { value: "civic", label: "Civic Education" },
    { value: "biology", label: "Biology" },
    { value: "chemistry", label: "Chemistry" },
    { value: "physics", label: "Physics" },
    { value: "economics", label: "Economics" },
    { value: "literature", label: "Literature" },
    { value: "government", label: "Government" },
    { value: "accounting", label: "Accounting" },
    { value: "commerce", label: "Commerce" },
    { value: "geography", label: "Geography" },
    { value: "drawing", label: "Technical Drawing" },
    { value: "art", label: "Visual Art" },
  ];

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
          <main className='flex-1'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'>
              <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
                <div className='relative w-full sm:w-64'>
                  <select className='w-full appearance-none border rounded-xl py-3 px-4 bg-white focus:outline-none text-lg'>
                    <option value='' disabled>
                      School Level
                    </option>
                    <option value='primary'>Primary</option>
                    <option value='secondary'>Secondary</option>
                    <option value='tertiary'>Tertiary</option>
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none' />
                </div>
                <div className='relative w-full sm:w-64'>
                  <select className='w-full appearance-none border rounded-xl py-3 px-4 bg-white focus:outline-none text-lg'>
                    {subjects.map((subject) => (
                      <option
                        key={subject.value || "default"}
                        value={subject.value}
                        disabled={subject.disabled}
                        selected={subject.selected}
                      >
                        {subject.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none' />
                </div>
                <button className='w-full flex items-center gap-3 sm:w-auto px-4 py-2 border rounded-md bg-white'>
                  <svg
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0 12H6V10H0V12ZM0 0V2H18V0H0ZM0 7H12V5H0V7Z'
                      fill='black'
                    />
                  </svg>
                  Sort
                </button>
              </div>
              <button className='w-full flex gap-3 sm:w-auto px-4 py-2 text-black border border-black rounded-md '>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_96_2213)'>
                    <path
                      d='M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM11 15.5H13V17.5H11V15.5ZM13 13.855V14.5H11V13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2841 12 12.5623 11.9193 12.8023 11.7673C13.0423 11.6154 13.2343 11.3984 13.3558 11.1416C13.4773 10.8848 13.5234 10.5988 13.4887 10.3168C13.454 10.0349 13.34 9.76858 13.1598 9.54891C12.9797 9.32924 12.7409 9.16523 12.4712 9.07597C12.2015 8.98671 11.912 8.97587 11.6364 9.04471C11.3608 9.11354 11.1104 9.25923 10.9144 9.46482C10.7183 9.6704 10.5847 9.92743 10.529 10.206L8.567 9.813C8.68863 9.20508 8.96951 8.64037 9.38092 8.17659C9.79233 7.7128 10.3195 7.36658 10.9086 7.17332C11.4977 6.98006 12.1275 6.94669 12.7337 7.07661C13.3399 7.20654 13.9007 7.49511 14.3588 7.91282C14.8169 8.33054 15.1559 8.86241 15.3411 9.45406C15.5263 10.0457 15.5511 10.6759 15.4129 11.2803C15.2747 11.8847 14.9785 12.4415 14.5545 12.8939C14.1306 13.3462 13.5941 13.6779 13 13.855Z'
                      fill='black'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_96_2213'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0 0.5)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                Ask Question
              </button>
            </div>

            {/* Question Cards */}
            <div className='space-y-4'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg border border-black'
                >
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                    {/* Image and Text */}
                    <img
                      src='/Frame 13.png'
                      alt='Avatar'
                      className='w-12 h-12 shrink-0'
                    />
                    <div className='flex-1'>
                      <div className='text-left'>
                        <h2 className='text-base sm:text-lg font-medium'>
                          Mathematics - Algebraic Expressions
                        </h2>
                        <p className='text-xs sm:text-sm text-gray-500 mb-4'>
                          Posted by Adeking 47 • 28 minutes ago
                        </p>
                        <p className='mb-2 text-sm sm:text-base'>
                          Pls, can someone help me figure this out;
                        </p>
                        <p className='text-sm sm:text-base'>
                          What is the value of x in the equation 2x + 5 = 17?
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className='flex flex-wrap justify-start gap-4 mt-4'>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <ArrowUp className='h-4 w-4' />
                          Upvote
                        </button>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <ArrowDown className='h-4 w-4' />
                          Downvote
                        </button>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <MessageSquare className='h-4 w-4' />
                          Answers (2)
                        </button>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <Share2 className='h-4 w-4' />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Questions;
