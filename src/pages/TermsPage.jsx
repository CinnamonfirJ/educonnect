import React from "react";
import Sidebar from "../components/Sidebar";

const TermsPage = () => {
  const termsSections = [
    {
      title: "Introduction",
      content:
        'Welcome to EduConnect! These Terms and Conditions ("Terms") govern your access to and use of the EduConnect platform, including its website, services, and features. By using EduConnect, you agree to comply with these Terms. If you do not agree, please refrain from using the platform.',
    },
    {
      title: "Eligibility",
      content: `To use EduConnect, you must be at least 13 years old. By registering or using the platform, you confirm that you meet this age requirement. If you are under 18, you must have permission from a parent or legal guardian to use EduConnect.`,
    },
    {
      title: "Account Registration and Security",
      content: `When you create an account on EduConnect, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and all activities that occur under your account. If you suspect unauthorized access, you must notify us immediately. EduConnect is not liable for any loss or damage resulting from unauthorized access to your account due to your failure to secure your login credentials.`,
    },
    {
      title: "User Conduct",
      content: `EduConnect is a community that fosters learning and collaboration. By using the platform, you agree to use it responsibly and respectfully. You must avoid posting or sharing content that is harmful, offensive, defamatory, obscene, or illegal. Spamming, phishing, or engaging in any fraudulent activity is strictly prohibited. Users are also expected to respect the intellectual property rights of others by refraining from copying or distributing unauthorized content. Additionally, any attempts to interfere with the platform’s security, performance, or integrity are not allowed. EduConnect reserves the right to suspend or terminate accounts that violate these guidelines or engage in harmful behavior.`,
    },
    {
      title: "Content Ownership and Licensing",
      content: `When you post content (e.g., questions, answers, or comments) on EduConnect, you retain ownership of your content. However, you grant EduConnect a non-exclusive, royalty-free, worldwide license to use, modify, display, and distribute your content for the purpose of operating and improving the platform.
EduConnect may remove any content that violates these Terms or is deemed inappropriate, without prior notice.`,
    },
    {
      title: "Badges and Rewards",
      content: `EduConnect uses a tiered badge system to recognize and reward user contributions. These badges are for recognition purposes only and do not have monetary or exchangeable value. EduConnect reserves the right to modify or remove badges and rewards at its discretion.`,
    },
    {
      title: "Platform Availability",
      content: `EduConnect strives to maintain uninterrupted access to the platform. However, we do not guarantee that the platform will always be available, error-free, or secure. We may temporarily suspend services for maintenance or updates without prior notice.`,
    },
    {
      title: "Third-Party Links",
      content: `EduConnect may include links to third-party websites or services. We are not responsible for the content, policies, or practices of these third parties, and accessing them is at your own risk.`,
    },
    {
      title: "Limitation of Liability",
      content: `EduConnect is provided on an "as-is" and "as-available" basis. To the fullest extent permitted by law, EduConnect disclaims all warranties, express or implied, regarding the platform, including its accuracy, reliability, and performance. EduConnect is not liable for any indirect, incidental, or consequential damages resulting from your use of the platform, including data loss, unauthorized access, or any harm caused by other users.`,
    },
    {
      title: "Termination",
      content: `EduConnect reserves the right to suspend or terminate your account or access to the platform at any time, with or without notice, for violations of these Terms or any other reason deemed necessary. You may also terminate your account at any time by contacting us.`,
    },
    {
      title: "Changes to Terms and Conditions",
      content: `EduConnect may update these Terms from time to time. Significant changes will be communicated via email or on the platform. By continuing to use EduConnect after such updates, you agree to the revised Terms.`,
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
                Terms and Conditions
              </h3>
            </div>

            {/* Terms Sections */}
            <div>
              {termsSections.map((section, i) => (
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

export default TermsPage;
