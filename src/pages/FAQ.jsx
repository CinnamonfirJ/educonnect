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

const FAQ = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const faqs = [
    {
      question: "What is Educonnect?",
      answer:
        "EduConnect is an online platform designed to foster learning and collaboration among students. It allows users to ask and answer questions, engage in discussions, and share knowledge. By providing a supportive and engaging community, EduConnect empowers students to learn and grow together.",
    },
    {
      question: "How does Educonnect work?",
      answer:
        "EduConnect is an online platform designed to foster learning and collaboration among students. It allows users to ask and answer questions, engage in discussions, and share knowledge. The platform offers a tiered badge system to recognize and reward user contributions, motivating users to actively participate and achieve higher levels of expertise. By providing a supportive and engaging community, EduConnect empowers students to learn and grow together.",
    },
    {
      question: "How do I sign up for EduConnect?",
      answer:
        "Signing up is easy! Simply provide a valid email address and create a password.",
    },
    {
      question: "Is EduConnect free to use?",
      answer:
        "Yes, EduConnect is completely free to use. There are no hidden fees or subscription charges.",
    },
    {
      question: "Can I ask questions anonymously?",
      answer:
        "We encourage open and transparent discussions, so anonymity is not something this site offers.",
    },
    {
      question: "How can I ensure my questions get answered quickly?",
      answer:
        "To increase the chances of a quick response, provide clear and concise questions, use relevant tags.",
    },
    {
      question: "How can I become a trusted user or expert on EduConnect?",
      answer:
        "By consistently providing high-quality answers, participating in discussions, and following community guidelines, you can build a reputation as a trusted user.",
    },
    {
      question: "What are badges and why are they important?",
      answer:
        "Badges are visual representations of your achievements on EduConnect. They recognize your contributions, motivate you to learn more, and help you stand out within the community.",
    },
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
            <div className='flex sm:p-4 p-2 border-b border-black/20 mb-6'>
              <h3 className='font-semibold text-[#1B1B1B] text-2xl'>
                Frequently Asked Questions (FAQs)
              </h3>
            </div>

            {/* Question Cards */}
            <div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg'
                >
                  <div>
                    {/* Fixed the attribute to className */}

                    <div className='flex gap-4 items-center'>
                      <div className='w-2 h-2 bg-black rounded-full'></div>
                      <h3>Q: {faq.question}</h3>
                    </div>
                    <p className='ml-6'>A: {faq.answer}</p>
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

export default FAQ;
