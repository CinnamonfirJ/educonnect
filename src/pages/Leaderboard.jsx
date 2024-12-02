import {
  Bell,
  ChevronDown,
  Home,
  Menu,
  MessageSquare,
  Trophy,
  HelpCircle,
  Search,
  ChevronUp,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const leaderboardData = [
  {
    rank: 1,
    username: "Peter Brown",
    points: 3840,
    contributions: 40,
    upvotes: 3900,
    downvotes: 100,
    badgeColor: "text-yellow-500",
  },
  {
    rank: 2,
    username: "Peter Brown",
    points: 1399,
    contributions: 39,
    upvotes: 1500,
    downvotes: 140,
    badgeColor: "text-yellow-500",
  },
  {
    rank: 3,
    username: "Peter Brown",
    points: 828,
    contributions: 38,
    upvotes: 800,
    downvotes: 10,
    badgeColor: "text-red-500",
  },
  {
    rank: 4,
    username: "Peter Brown",
    points: 720,
    contributions: 37,
    upvotes: 700,
    downvotes: 17,
    badgeColor: "text-pink-500",
  },
  {
    rank: 5,
    username: "Peter Brown",
    points: 610,
    contributions: 37,
    upvotes: 600,
    downvotes: 27,
    badgeColor: "text-pink-500",
  },
  {
    rank: 6,
    username: "Peter Brown",
    points: 390,
    contributions: 34,
    upvotes: 456,
    downvotes: 100,
    badgeColor: "text-red-500",
  },
  {
    rank: 7,
    username: "Peter Brown",
    points: 290,
    contributions: 20,
    upvotes: 300,
    downvotes: 30,
    badgeColor: "text-red-500",
  },
  {
    rank: 8,
    username: "Peter Brown",
    points: 213,
    contributions: 14,
    upvotes: 200,
    downvotes: 1,
    badgeColor: "text-green-500",
  },
  {
    rank: 9,
    username: "Peter Brown",
    points: 212,
    contributions: 12,
    upvotes: 200,
    downvotes: 0,
    badgeColor: "text-purple-500",
  },
  {
    rank: 10,
    username: "Peter Brown",
    points: 209,
    contributions: 11,
    upvotes: 200,
    downvotes: 20,
    badgeColor: "text-purple-500",
  },
];

const Leaderboard = () => {
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
            <h1 className='text-2xl font-semibold mb-6'>Leaderboards</h1>

            <div className='bg-white rounded-lg border overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Rank
                      </th>
                      <th
                        scope='col'
                        className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Username
                      </th>
                      <th
                        scope='col'
                        className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Points
                      </th>
                      <th
                        scope='col'
                        className='hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Contributions
                      </th>
                      <th
                        scope='col'
                        className='hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Upvotes
                      </th>
                      <th
                        scope='col'
                        className='hidden lg:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Downvotes
                      </th>
                      <th
                        scope='col'
                        className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Badges
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {leaderboardData.map((user) => (
                      <tr key={user.rank} className='hover:bg-gray-50'>
                        <td className='px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {user.rank}
                        </td>
                        <td className='px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          {user.username}
                        </td>
                        <td className='px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          {user.points.toLocaleString()}
                        </td>
                        <td className='hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          {user.contributions}
                        </td>
                        <td className='hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          {user.upvotes.toLocaleString()}
                        </td>
                        <td className='hidden lg:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          {user.downvotes}
                        </td>
                        <td className='px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                          <ChevronUp className={`h-5 w-5 ${user.badgeColor}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
