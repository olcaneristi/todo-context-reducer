import * as React from 'react';

const IconChecked = props => (
  <svg
    width={props?.width || 20}
    height={props?.height || 20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke="#652D90"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9.857 14.856 5.314-5.888"
      stroke="#F6921E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 9.92 7.667 13l5.186-6"
      stroke="#652D90"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconChecked;
