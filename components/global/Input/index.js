import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, ShowPasswordText, InputWrapper } from './styles';

const Input = ({
  size,
  name,
  onChange,
  placeholder,
  type,
  inputRef,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

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

  const togglePasword = () => {
    if (inputType === 'password') setInputType('text');
    if (inputType === 'text') setInputType('password');
  };

  return (
    <InputWrapper>
      <StyledInput
        error={error}
        ref={inputRef}
        type={inputType}
        name={name}
        size={fontSize()}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === 'password' && <ShowPasswordText onClick={togglePasword}>{inputType === 'password' ? 'show' : 'hide'}</ShowPasswordText>}
    </InputWrapper>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
  ]),
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  size: 'md',
  onChange: () => {},
  name: '',
  placeholder: '',
  error: false,
};

export default Input;
