// SubNavbar.jsx
import React from "react";

const SubNavbar = () => {
  const leftItems = ["Movies", "Stream", "Events", "Plays", "Activities"];
  const rightItems = ["ListYourShow","Corporates", "Offers", "Gift Cards"];

  return (
    <div className="w-full bg-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-10 py-2 overflow-x-auto">
        {/* Left side items */}
        <div className="flex items-center gap-6">
          {leftItems.map((item) => (
            <button
              key={item}
              className="text-gray-700 font-medium hover:text-red-600 whitespace-nowrap transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-6">
          {rightItems.map((item) => (
            <button
              key={item}
              className="text-gray-700 font-medium hover:text-red-600 whitespace-nowrap transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
