import React, { useState } from 'react';


const CardList = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export default CardList;
