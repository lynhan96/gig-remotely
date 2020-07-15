import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({
  size,
  name,
  onChange,
  placeholder,
}) => {
  const fontSize = () => {
    switch (size) {
      case 'sm':
        return 32;
      case 'md':
        return 50;
      case 'lg':
        return 74;
      default:
        return 50;
    }
  };

  return (
    <StyledInput
      name={name}
      size={fontSize()}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  size: 'md',
  onChange: null,
  name: '',
  placeholder: '',
};

export default Input;
