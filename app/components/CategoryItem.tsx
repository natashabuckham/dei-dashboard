"use client";
import { toast } from "react-toastify";
import { ChevronRightIcon } from "lucide-react";

interface CategoryItemProps {
  category: string;
  className?: string;
}

function CategoryItem({
  category,
  className = "bg-blue-500 hover:bg-blue-600",
}: CategoryItemProps) {
  const handleClick = () => {
    toast.success(`You clicked on ${category}!`);
  };

  return (
    <button
      className={`flex items-center justify-between px-6 py-4 text-white bg-gray-800 rounded-lg shadow-md transition-colors hover:bg-gray-700 ${className}`}
      onClick={handleClick}
    >
      <span className="text-lg font-medium">{category}</span>
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  );
}

export default CategoryItem;
