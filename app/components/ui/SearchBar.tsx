"use client";

import { useState, ChangeEvent } from "react";
import { SearchResult } from "@/lib/types";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const sampleData: SearchResult[] = [
    { id: 1, title: "First Item", description: "Description 1" },
    { id: 2, title: "Second Item", description: "Description 2" },
    { id: 3, title: "Third Item", description: "Description 3" },
  ];

  const handleResultClick = (item: SearchResult) => {
    setSearchTerm(item.title);
    setResults([]);
    router.push(`/company/${item.id}`);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsLoading(true);

    const filtered = sampleData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()),
    );
    setResults(filtered);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="relative">
        <div className="relative">
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTimeout(() => setIsFocused(false), 200);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Results dropdown */}
        {searchTerm && isFocused && (
          <div className="absolute mt-2 w-full bg-white rounded-lg border border-gray-200 shadow-lg">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">
                <div className="animate-spin inline-block w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full mr-2" />
                Searching...
              </div>
            ) : results.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                    onClick={() => {
                      handleResultClick(item);
                    }}
                  >
                    <h3 className="text-sm font-medium text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for &quot;{searchTerm}&quot;
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
