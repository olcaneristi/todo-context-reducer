import * as React from 'react';

const IconMenuFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width || 24}
    height={props?.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M3 12H21"
      stroke="#F6921E"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H15M9 18H21H9Z"
      stroke="#652D90"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconMenuFill;
