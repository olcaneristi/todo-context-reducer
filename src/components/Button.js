import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, children, onClick, type, className }) => (
  <button className={className} type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
