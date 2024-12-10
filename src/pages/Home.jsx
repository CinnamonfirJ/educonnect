import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, MessageSquare, Share2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = new URL(
          "https://educonnect-fv60.onrender.com/api/v1/questions"
        );
        const params = {
          page: 1,
          limit: 10,
          subject: "1f4e544b-b305-11ef-a651-3c52822c87f2",
          level: "102c1179-b305-11ef-a651-3c52822c87f2",
          search: "ty",
        };
        url.search = new URLSearchParams(params).toString(); // Append query parameters to the URL

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json(); // Convert response to JSON
        setPosts(data.results.data); // Update state with the posts data
        console.log(data); // Update state with the posts data
      } catch (err) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [token]); // Add token to the dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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

            {/* Post Cards */}
            <div className='space-y-4'>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className='bg-white py-6 px-4 sm:px-6 md:px-8 rounded-lg border border-black'
                >
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                    {/* Image and Text */}
                    {post.images && post.images.length > 0 && (
                      <img
                        src={post.images[0].url} // Display the first image
                        alt='Post Image'
                        className='w-12 h-12 shrink-0'
                      />
                    )}
                    <div className='flex-1'>
                      <div className='text-left'>
                        <h2 className='text-base sm:text-lg font-medium'>
                          {post.topic} {/* Topic */}
                        </h2>
                        <p className='text-xs sm:text-sm text-gray-500 mb-4'>
                          Posted by {post.user_id} •{" "}
                          {new Date(post.createdAt).toLocaleString()}
                        </p>
                        <p className='mb-2 text-sm sm:text-base'>
                          {post.text} {/* Text content */}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className='flex flex-wrap justify-start gap-4 mt-4'>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <ArrowUp className='h-4 w-4' />
                          Upvote {post.upvoteCount}
                        </button>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <ArrowDown className='h-4 w-4' />
                          Downvote {post.downvoteCount}
                        </button>
                        <button className='flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm'>
                          <MessageSquare className='h-4 w-4' />
                          Answers (0) {/* Placeholder for answer count */}
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
