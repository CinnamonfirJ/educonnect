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
import Sidebar from "../components/Sidebar";

// import a from "next/link";
// import Image from "next/image";

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='sticky top-32 h-full'>
            <Sidebar />
          </div>

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

export default HomePage;
