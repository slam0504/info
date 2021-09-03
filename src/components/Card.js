import React from 'react';

const Card = ({ className, image, children }) => (
  <div
    className={`p-10 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      minWidth: 320
    }}
    data-fancybox="gallery"
    data-src={image}
  >
    {children}
  </div>
);

export default Card;
