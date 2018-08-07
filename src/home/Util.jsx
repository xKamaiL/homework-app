import React from 'react';

export const Row = ({ children = null, className }) => (
  <div className={`${className} row`}>{children}</div>
);
export const Col = ({ size, children }) => (
  <div className={`col-md-${size}`}>{children}</div>
);
