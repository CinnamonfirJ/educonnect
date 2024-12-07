import React from "react";
import Sidebar from "../components/Sidebar";

const PrivacyPage = () => {
  const privacySections = [
    {
      title: "Introduction",
      content:
        "EduConnect values your trust and is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services. By accessing EduConnect, you agree to the terms of this policy.",
    },
    {
      title: "Information We Collect",
      content: `We collect various types of information to enhance your experience on EduConnect. This includes:
      
- **Personal Information**: Your name, email address, username, and password during registration, along with optional profile details like your profile picture, educational institution, areas of expertise, and interests.
      
- **Activity Data**: Questions you ask, answers you provide, discussions you participate in, and your interactions with badges, notifications, and other users.
      
- **Technical Information**: Your IP address, browser type, device information, operating system, and cookies, collected to track website usage and preferences.
      
- **Third-Party Services**: If you choose to link third-party services like social media accounts, we may receive information from those platforms as permitted by your settings.`,
    },
    {
      title: "How We Use Your Information",
      content: `EduConnect uses your data to provide a personalized learning experience, enable participation in discussions and collaborative learning, award badges, and recognize contributions. We also use your data to improve the platform through analytics and feedback, ensure the platform's security and integrity, and communicate updates, announcements, or promotional materials (with an option to unsubscribe).`,
    },
    {
      title: "How We Share Your Information",
      content: `We respect your privacy and do not sell your data. However, we may share information with other users to display your public profile, questions, answers, and badge achievements. We also work with service providers for hosting, analytics, or technical support under strict confidentiality agreements. In cases where it is required by law or to protect the rights and safety of our users and platform, we may share information for legal reasons.`,
    },
    {
      title: "Your Privacy Choices",
      content: `You have choices regarding your privacy. You can adjust your privacy settings to control what others see about you, request a copy of your data at any time, or ask for your account to be deleted, which will remove your personal information (although anonymized data may be retained for analytical or security purposes). You can also manage cookie preferences through your browser settings.`,
    },
    {
      title: "Data Protection and Retention",
      content: `EduConnect uses encryption and secure storage to protect your data and retains it only as long as necessary to provide services or comply with legal requirements.`,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='sticky top-32 h-full'>
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className='flex-1'>
            <div className='flex sm:p-4 p-2 border-b border-black/20 mb-6'>
              <h3 className='font-semibold text-[#1B1B1B] text-2xl'>
                Privacy Policy
              </h3>
            </div>

            {/* Privacy Sections */}
            <div>
              {privacySections.map((section, i) => (
                <div
                  key={i}
                  className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg mb-4'
                >
                  <div>
                    <h3 className='font-semibold text-xl'>{section.title}</h3>
                    <p className='mt-2 text-gray-700'>{section.content}</p>
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

export default PrivacyPage;
