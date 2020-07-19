import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTextArea, StyledInput, ShowPasswordText, InputWrapper,
} from './styles';

const Input = ({
  size,
  name,
  onChange,
  placeholder,
  type,
  error,
  defaultValue,
  inputRef,
  background,
  fieldType,
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

  if (fieldType === 'textarea') {
    return (
      <StyledTextArea
        background={background}
        defaultValue={defaultValue}
        error={error}
        ref={inputRef}
        type={inputType}
        name={name}
        size={fontSize()}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }

  return (
    <InputWrapper>
      <StyledInput
        background={background}
        defaultValue={defaultValue}
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
    'textarea',
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.bool,
  background: PropTypes.string,
  fieldType: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  size: 'md',
  onChange: () => {},
  name: '',
  placeholder: '',
  error: false,
  defaultValue: '',
  background: '',
  fieldType: 'input',
};

export default Input;
