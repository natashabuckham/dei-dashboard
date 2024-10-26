"use client";

import { useState, ChangeEvent } from "react";
import { CompanyData } from "@/lib/types";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { companies } from "@/lib/search-data";

function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleResultClick = (item: CompanyData) => {
    setSearchTerm(item.EmployerName);
    router.push(`/company/${item.EmployerId}`);
  };

  const filteredResults = searchTerm
    ? companies
        .filter(
          (item) =>
            item.EmployerName.toLowerCase().includes(
              searchTerm.toLowerCase(),
            ) || item.Address.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(0, 5)
    : [];

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="relative">
        <div className="relative">
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {searchTerm && isFocused && filteredResults.length > 0 && (
          <div className="absolute mt-2 w-full bg-white rounded-lg border border-gray-200 shadow-lg">
            <ul className="divide-y divide-gray-200">
              {filteredResults.map((item) => (
                <li
                  key={item.EmployerId}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  onClick={() => handleResultClick(item)}
                >
                  <h3 className="text-sm font-medium text-gray-800">
                    {item.EmployerName}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.Address}</p>
                  <div className="mt-1 flex gap-2 flex-wrap text-xs">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      Mean: {item.DiffMeanHourlyPercent}%
                    </span>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded">
                      Median: {item.DiffMedianHourlyPercent}%
                    </span>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      {item.EmployerSize}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
