import { useState } from "react";

export default function QuestionForm({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    subject_id: "",
    class_id: "102c1179-b305-11ef-a651-3c52822c87f2",
    text: "",
    topic: "",
    images: selectedFile,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example subject list
  const subjects = [
    { id: "1f4e544b-b305-11ef-a651-3c52822c87f2", name: "Mathematics" },
    { id: "2", name: "Physics" },
    { id: "3", name: "Chemistry" },
    { id: "4", name: "Biology" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e) => {
    const selectedId = e.target.value;
    setFormData((prev) => ({
      ...prev,
      subject_id: selectedId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const submissionData = {
      ...formData,
      images: selectedFile, // Add file to submission if needed
    };
    const token = localStorage.getItem("token");

    try {
      // Create a FormData object
      const formDataObj = new FormData();

      // Append formData fields
      formDataObj.append("subject_id", formData.subject_id);
      formDataObj.append("class_id", formData.class_id);
      formDataObj.append("text", formData.text);
      formDataObj.append("topic", formData.topic);

      // Append file if it exists
      if (selectedFile) {
        formDataObj.append("file", selectedFile);
      }

      const response = await fetch(
        "https://educonnect-fv60.onrender.com/api/v1/questions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formDataObj,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create question");
      }

      console.log("Question created successfully:", result);
      onClose(); // Close the form
    } catch (err) {
      console.error("Error creating question:", err.message);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center bg-white p-4'>
      <div className='w-full max-w-xl space-y-4'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-1'>
            <label htmlFor='subject' className='block'>
              Subject
            </label>
            <select
              id='subject'
              name='subject_id'
              value={formData.subject_id}
              onChange={handleSubjectChange}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
            >
              <option value=''>Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          <div className='space-y-1'>
            <label htmlFor='topic' className='block'>
              Topic
            </label>
            <input
              id='topic'
              name='topic'
              value={formData.topic}
              onChange={handleChange}
              placeholder='Enter the topic'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
            />
          </div>

          <div className='space-y-1'>
            <label htmlFor='text' className='block'>
              Question
            </label>
            <textarea
              id='text'
              name='text'
              value={formData.text}
              onChange={handleChange}
              placeholder='Enter your question'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              rows='3'
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

          {error && <div className='text-red-500 text-sm'>{error}</div>}

          <button
            type='submit'
            className={`w-full py-3 rounded-lg ${
              loading ? "bg-gray-400" : "bg-[#FFE4AC]"
            } hover:bg-white border border-black transition-colors duration-100`}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
