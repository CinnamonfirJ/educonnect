import { useState } from "react";

export default function QuestionForm({ onClose }) {
  const [formData, setFormData] = useState({
    subject: "",
    question: "",
    answer: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='flex items-center justify-center bg-white p-4'>
      <div className='w-full max-w-xl space-y-4'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-1'>
            <label htmlFor='subject' className='block'>
              Subject
            </label>
            <input
              id='subject'
              name='subject'
              type='text'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Enter subject'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
            />
          </div>

          <div className='space-y-1'>
            <label htmlFor='question' className='block '>
              Question
            </label>
            <textarea
              id='question'
              name='question'
              value={formData.question}
              onChange={handleChange}
              placeholder='Enter your question'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              rows='2'
            ></textarea>
          </div>

          <div className='space-y-1'>
            <label htmlFor='answer' className='block '>
              Answer
            </label>
            <textarea
              id='answer'
              name='answer'
              value={formData.answer}
              onChange={handleChange}
              placeholder='Enter answer'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              rows='2'
            ></textarea>
          </div>

          <div className='space-y-1'>
            <label htmlFor='file-upload' className='block text-lg font-medium'>
              Upload File <span className='text-gray-500'>(if any)</span>
            </label>
            <div className='border border-dashed border-gray-400 rounded-lg p-6 text-center'>
              <input
                id='file-upload'
                type='file'
                onChange={handleFileChange}
                className='hidden'
              />
              <label
                htmlFor='file-upload'
                className='cursor-pointer flex flex-col items-center text-gray-500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mb-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16.5 10.5L12 15m0 0l-4.5-4.5M12 15V3'
                  />
                </svg>
                <p className='text-sm'>
                  Drag and drop images for upload or click the “cloud” icon to
                  select an image
                </p>
              </label>
            </div>
            {selectedFile && (
              <p className='text-sm text-gray-700 mt-2'>
                Selected File: {selectedFile.name}
              </p>
            )}
          </div>

          {/* <div className='space-y-1'>
            <label htmlFor='file' className='block '>
              Upload File (if any)
            </label>
            <input
              id='file'
              name='file'
              type='file'
              className='block w-full px-3 py-1 text-gray-500 border border-gray-300 rounded-lg'
            />
          </div> */}

          <button
            type='submit'
            className='w-full py-3 rounded-lg bg-[#FFE4AC] hover:bg-white border border-black transition-colors duration-100'
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
