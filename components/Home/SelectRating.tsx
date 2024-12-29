import data from '@/data';
import React, { useState } from 'react';

interface SelectRatingProps {
  onRatingChange: (selectedRatings: any[]) => void;
}

const SelectRating: React.FC<SelectRatingProps> = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState<any[]>([]);

  const onSelectRating = (isChecked: boolean, value: any) => {
    if (isChecked) {
      // Add the value to the array
      const updatedRatings = [...selectedRating, value];
      setSelectedRating(updatedRatings);
      onRatingChange(updatedRatings);
    } else {
      // Remove the value from the array
      const updatedRatings = selectedRating.filter((n) => n !== value);
      setSelectedRating(updatedRatings);
      onRatingChange(updatedRatings);
    }
  };

  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {data.ratingList.map((item: any, index: number) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </label>
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRating;
