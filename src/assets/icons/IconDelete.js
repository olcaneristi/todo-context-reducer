import * as React from 'react';

const IconDelete = props => (
  <svg
    width={props?.width || 24}
    height={props?.height || 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
      stroke="#F6921E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 7h16m-2 13V7H6v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Z"
      stroke="#652D90"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconDelete;
