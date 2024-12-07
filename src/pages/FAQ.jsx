import React from "react";
import ReactMarkdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import BadgeIcon from "../components/BadgeIcon";

const FAQ = () => {
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
    {
      question: "How does the badge grading system work on EduConnect?",
      answer:
        "EduConnect uses a tiered badge system to recognize and reward different levels of contribution and expertise. As you actively participate in the community, you can earn badges that signify your growing knowledge and skills. The higher the badge tier, the more significant your contributions have been.",
    },
    {
      question:
        "What are the different levels of badges on EduConnect and what do they signify?",
      answer: `EduConnect has a tiered badge system to recognize and reward different levels of contribution and expertise. As you actively participate in the community, you can earn badges at various levels through points accumulation, denoted with certain colors:
      **Newbie**: This is the starting point for all new users.  
**Learner**: Awarded to users who are actively learning and contributing to the community.  
**Student**: Awarded to users who consistently contribute and demonstrate a growing understanding of the platform.  
**Scholar**: Awarded to users who have a deep understanding of the platform's topics and provide high-quality content.  
**Specialist**: Awarded to users who have expertise in specific areas and are often sought out for advice.  
**Mentor**: Awarded to users who actively help and guide other users, sharing their knowledge and experience.  
**Expert**: Awarded to users who are highly knowledgeable and skilled in their field.  
**Master**: Awarded to users who have achieved a high level of mastery and are recognized as leaders in the community.  
**Sage**: Awarded to highly experienced users who have a deep understanding of the platform and its community.  
**Genius**: Awarded to exceptionally talented and innovative users who consistently push the boundaries of knowledge.  
**Icon**: Awarded to users who are highly influential and respected within the community.  
**Virtuoso**: Awarded to users who are highly skilled and talented in their field.  
**Legend**: Awarded to users who have made extraordinary contributions to the platform and are considered legendary figures.
`,
    },
    {
      question: "How can I get help if I'm having trouble with the platform?",
      answer:
        "You can contact our support team through the in-app support feature or by emailing us directly.",
    },
  ];

  const badges = [
    { name: "Newbie", points: "0", num: "" },
    { name: "Learner", points: "50", num: "-1" },
    { name: "Student", points: "200", num: "-2" },
    { name: "Scholar", points: "500", num: "-3" },
    { name: "Specialist", points: "1,000", num: "-4" },
    { name: "Mentor", points: "2,000", num: "-5" },
    { name: "Expert", points: "4,000", num: "-6" },
    { name: "Master", points: "7,500", num: "-7" },
    { name: "Sage", points: "15,000", num: "-8" },
    { name: "Genius", points: "30,000", num: "-9" },
    { name: "Icon", points: "70,000", num: "-10" },
    { name: "Virtuoso", points: "150,000", num: "-11" },
    { name: "Legend", points: "500,000", num: "-12" },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='sticky top- h-full'>
            <Sidebar />
          </div>

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
                  className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg mb-4'
                >
                  <div>
                    <div className='flex gap-4 items-center'>
                      <div className='w-2 h-2 bg-black rounded-full'></div>
                      <h3 className='font-semibold'>Q: {faq.question}</h3>
                    </div>

                    <p className='ml-6 mt-2 flex gap-2'>
                      A: <ReactMarkdown>{faq.answer}</ReactMarkdown>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge System */}
            <div className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg mt-8'>
              <h3 className='font-semibold text-[#1B1B1B] text-xl mb-4'>
                Badge System
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center space-x-2'
                  >
                    <BadgeIcon num={badge.num} />
                    <div className='text-center'>
                      <p className='font-medium'>{badge.name}</p>
                      <p className='text-sm text-gray-500'>
                        {badge.points} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
