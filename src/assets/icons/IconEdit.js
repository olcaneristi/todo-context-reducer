import * as React from 'react';

const IconEdit = props => (
  <svg
    width={props?.width || 24}
    height={props?.height || 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m20.41 6.41-2.82-2.82a1 1 0 0 0-1.42 0l-2.88 2.88 4.24 4.24 2.88-2.88a1.001 1.001 0 0 0 0-1.42Z"
      stroke="#F6921E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10.47 9.29 4.24 4.24L7.24 21H3v-4.24l7.47-7.47Z"
      stroke="#652D90"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconEdit;
