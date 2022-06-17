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

const IconAdd = props => (
  <svg
    width={props?.width || 24}
    height={props?.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5V19M5 12H19H5Z"
      stroke={props?.color || 'black'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

export { IconChecked, IconAdd, IconDelete, IconEdit, IconMenu, IconMenuFill, IconNotChecked };
