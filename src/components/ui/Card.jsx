import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'p-6',
  shadow = 'shadow-lg',
  ...props 
}) => {
  const cardClasses = `
    bg-white dark:bg-gray-800 
    rounded-xl 
    ${shadow}
    ${padding}
    transition-all duration-300 
    hover:shadow-xl
    border border-gray-200 dark:border-gray-700
    ${className}
  `.trim();

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;