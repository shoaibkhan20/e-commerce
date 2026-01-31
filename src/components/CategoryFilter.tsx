import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const activeClass = "bg-primary text-white";
  const inactiveClass = "bg-white text-gray-700 hover:bg-gray-100";

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition-colors duration-200 ${!selectedCategory ? activeClass : inactiveClass}`}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition-colors duration-200 capitalize ${selectedCategory === category ? activeClass : inactiveClass}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
