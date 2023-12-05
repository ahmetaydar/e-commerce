import React from "react";

const CheckedIcon = () => {
  return (
    <div className="w-[22px] h-[22px]  border-primary rounded-full border-2">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#FFF" />
        <path
          d="M11.3333 5.33333L7.33333 9.33333L4.66667 6.66667"
          stroke="#1EA4CE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CheckedIcon;
