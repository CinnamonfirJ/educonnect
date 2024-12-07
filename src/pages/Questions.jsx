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
import PageHeader from "../components/PageHeader";

// import a from "next/link";
// import Image from "next/image";

const Questions = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <PageHeader />

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
