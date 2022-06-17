import * as React from 'react';

const IconNotChecked = props => (
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
  </svg>
);

export default IconNotChecked;
