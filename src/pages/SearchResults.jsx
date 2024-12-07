import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Questions", "Answers"];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    if (query) {
      setSearchQuery(query);
      // Simulating an API call
      setIsLoading(true);
      setTimeout(() => {
        // Mock results - replace this with actual API call in a real application
        const mockResults = [
          {
            id: 1,
            title: "Result 1",
            description: "This is the first result for " + query,
          },
          {
            id: 2,
            title: "Result 2",
            description: "This is the second result for " + query,
          },
          {
            id: 3,
            title: "Result 3",
            description: "This is the third result for " + query,
          },
        ];
        setResults(mockResults);
        setIsLoading(false);
      }, 1000);
    }
  }, [location.search]);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='sticky top-32 h-full'>
            <Sidebar />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center '>
              <h1 className='text-3xl mb-4'>
                Search Results for{" "}
                <span className='font-semibold'>{searchQuery}</span>
              </h1>
              <div className='flex justify-center gap-3'>
                <span className='text-xl mb-2'>Filter By</span>
                <div className='flex justify-center gap-2'>
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      className={`text-xl mb-2 ${
                        activeFilter === filter ? "underline font-semibold" : ""
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {isLoading ? (
              <p>Loading...</p>
            ) : results.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <ul className='space-y-4'>
                {results.map((result) => (
                  <li
                    key={result.id}
                    className='bg-white shadow rounded-lg p-4'
                  >
                    <h2 className='text-xl font-semibold mb-2'>
                      {result.title}
                    </h2>
                    <p className='text-gray-600'>{result.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
