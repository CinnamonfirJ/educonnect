import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const subjects = [
    "Mathematics",
    "English",
    "Biology",
    "Accounting",
    "Literature",
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row'>
          <Sidebar />
          <div className='max-w-3xl flex-1 mx-auto p-6'>
            <div className='flex items-start justify-between mb-8'>
              <div className='flex items-center gap-4'>
                <img
                  src='/Frame 15.png'
                  alt='Profile'
                  width={80}
                  height={80}
                  className='rounded-xl'
                />
                <div>
                  <h1 className='text-2xl font-semibold'>
                    Ngozi Yusuf Adedeji
                  </h1>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <span>4,600 points</span>
                    <span className='flex items-center gap-1'>
                      Mentor <span className='text-red-500'>🎯</span>
                    </span>
                  </div>
                </div>
              </div>
              <button className='px-4 py-2 rounded-lg bg-[#FFE4AC] hover:bg-white border border-black transition-colors'>
                Update
              </button>
            </div>

            <section className='mb-8'>
              <h2 className='text-lg font-medium mb-2'>Followed Subjects</h2>
              <div className='p-4 border rounded-xl'>{subjects.join(", ")}</div>
            </section>

            <section className='mb-8'>
              <h2 className='text-lg font-medium mb-2'>Contact Email</h2>
              <div className='flex items-start gap-4'>
                <input
                  type='email'
                  defaultValue='ngozimerry@mail.com'
                  className='flex-1 p-3 border rounded-xl'
                  disabled
                />
                <button className='px-4 py-2 rounded-lg bg-[#FFE4AC] hover:bg-white border border-black transition-colors whitespace-nowrap'>
                  Change email address
                </button>
              </div>
            </section>

            <section>
              <h2 className='text-lg font-medium mb-2'>Password</h2>
              <p className='text-gray-600 mb-4'>Change password</p>
              <div className='space-y-4'>
                <div>
                  <label className='block text-gray-600 mb-1'>
                    Current Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      className='w-full p-3 border rounded-xl pr-10'
                    />
                    <button
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                    >
                      {showCurrentPassword ? (
                        <EyeOffIcon className='w-5 h-5' />
                      ) : (
                        <EyeIcon className='w-5 h-5' />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className='block text-gray-600 mb-1'>
                    New Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className='w-full p-3 border rounded-xl pr-10'
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
                    >
                      {showNewPassword ? (
                        <EyeOffIcon className='w-5 h-5' />
                      ) : (
                        <EyeIcon className='w-5 h-5' />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
