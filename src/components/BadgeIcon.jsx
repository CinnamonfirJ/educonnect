import React from "react";

const BadgeIcon = ({ num }) => {
  return (
    // <svg viewBox='0 0 24 24' className='h-6 w-6' fill={color}>
    //   <path d='M12 2L2 12l10 10 10-10z' />
    // </svg>
    <div>
      <img src={`/Icons${num}.png`} alt='badges' />
    </div>
  );
};

export default BadgeIcon;
