"use client";
import { toast } from "react-toastify";

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
      className={`p-4 m-2 text-white rounded-lg shadow-md transition-colors ${className}`}
      onClick={handleClick}
    >
      {category}
    </button>
  );
}

export default CategoryItem;
