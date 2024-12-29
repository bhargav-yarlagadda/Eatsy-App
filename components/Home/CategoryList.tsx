import React, { useState } from 'react';
import data from '@/data';
import Image from 'next/image';

// Define the type for a single category item
type CategoryItem = {
  name: string;
  value: string | number; // Adjust based on your actual data structure
  icon: string;
};

// Define the props type for the CategoryList component
interface CategoryListProps {
  onCategoryChange: (value: string | number) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryChange }) => {
  const [categoryList, setCategoryList] = useState<CategoryItem[]>(data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

  return (
    <div>
      <div
        className="grid grid-cols-2"
      >
        {categoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col
                justify-center items-center bg-gray-100
                p-6 m-2 rounded-lg grayscale 
                hover:grayscale-0 cursor-pointer
                text-[18 px]
                 border-purple-400
                ${
                  selectedCategory === index
                    ? 'grayscale-0 border-[1px]'
                    : null
                }`}
            onClick={() => {
              setSelectedCategory(index);
              onCategoryChange(item.value);
            }}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={40}
              height={40}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
