import React, { useState } from 'react';

interface RangeSelectProps {
  onRadiusChange: (radius: number) => void;
}

const RangeSelect: React.FC<RangeSelectProps> = ({ onRadiusChange }) => {
  const [radius, setRadius] = useState(2500);

  return (
    <div className="mt-5 px-4">
      <h2 className="font-semibold text-lg text-gray-800 mb-2">
        Select Radius (In Meters)
      </h2>
      <div className="flex flex-col gap-2">
        <input
          type="range"
          className="w-full h-1  rounded-lg appearance-none cursor-pointer
          bg-gray-300 transition duration-200 ease-in-out
          focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-opacity-50"
          min="500"
          max="5000"
          step="250"
          onChange={(e) => {
            const value = Number.parseInt(e.target.value, 10);
            setRadius(value);
            onRadiusChange(value);
          }}
          defaultValue={radius}
        />
        <div className="flex justify-between text-md text-gray-500">
          <span>500m</span>
          <span>5000m</span>
        </div>
        <label
          className="text-gray-300 text-sm  font-medium text-center mt-2"
        >
          Selected Radius: <span className="text-purple-600">{radius}</span> meters
        </label>
      </div>
    </div>
  );
};

export default RangeSelect;
