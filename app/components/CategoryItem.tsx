"use client";
import { toast } from "react-toastify";

interface CategoryItemProps {
  category: string;
}

function CategoryItem({ category }: CategoryItemProps) {
  const handleClick = () => {
    toast.success(`You clicked on ${category}!`);
  };

  return (
    <button
      className="p-4 m-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      onClick={handleClick}
    >
      {category}
    </button>
  );
}

export default CategoryItem;
