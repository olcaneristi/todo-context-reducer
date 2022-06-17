import * as React from 'react';

const IconMenu = props => (
  <svg
    width={props?.width || 24}
    height={props?.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 6h12M9 18h12H9Zm-6-6h18H3Z"
      stroke={props?.color || '#000'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconMenu;
