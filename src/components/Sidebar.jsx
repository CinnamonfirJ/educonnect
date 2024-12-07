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

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='bg-white md:bg-transparent'>
      {" "}
      {/* Mobile sidebar toggle */}
      <button
        className='md:hidden mb-4 p-2 bg-white rounded-md shadow'
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className='h-6 w-6' />
      </button>
      {/* Sidebar */}
      <div className='flex flex-col gap-8'>
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
        <div className='bg-black/20 w-full h-[1px]' />
        <nav
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-48 space-y-1 mb-4 md:mb-0`}
        >
          <a
            href='/privacy'
            className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
          >
            Privacy
          </a>
          <a
            href='/terms'
            className='flex items-center px-3 py-2 rounded-md hover:bg-gray-100'
          >
            Terms and Conditions
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
