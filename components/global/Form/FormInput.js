import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import { Input } from 'components/global';
import PropTypes from 'prop-types';

import {
  FormItem,
  StyledText,
  ErrorLabel,
  FieldWrapper,
} from './styles';

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const FormInput = ({
  required, name, label, type, placeholder, validateType, background, defaultValue, context,
}) => {
  const [fieldValidate, setFieldValidate] = useState({ hasError: false, message: '' });
  const {
    errorRef, itemsRef, valuesRef, itemType,
  } = useContext(context);
  const fieldRef = useRef();

  const executeValidate = (value) => {
    if (required && (!value || value.length === 0)) return 'This field is required.';
    if (validateType === 'email' && !validateEmail(value)) return 'Invalid email';

    return null;
  };

  const validateField = async () => {
    const { value } = fieldRef.current;

    const message = executeValidate(value);

    if (message && message.length > 0) {
      setFieldValidate({ hasError: true, message });
      const index = errorRef.current.indexOf(name);
      if (index === -1) errorRef.current.push(name);
    } else {
      setFieldValidate({ hasError: false, message: '' });
      const index = errorRef.current.indexOf(name);
      if (index !== -1) errorRef.current.splice(index, 1);
      valuesRef.current[name] = value;
    }
    return Promise.resolve();
  };

  const onChange = () => validateField();

  useEffect(() => {
    errorRef.current.push(name);
    itemsRef.current.push(validateField);
  }, []);

  return (
    <FormItem itemType={itemType}>
      <StyledText itemType={itemType} size='sm' weight='bold' className={label ? 'show-input-label' : 'hide-input-label'}>{label}</StyledText>
      <FieldWrapper className={label && 'input-wrapper-width-label'}>
        <Input
          defaultValue={defaultValue}
          fieldType={type === 'textarea' ? 'textarea' : 'input'}
          error={fieldValidate.hasError}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          inputRef={fieldRef}
          background={background}
        />
        <ErrorLabel className={fieldValidate.hasError ? 'show-input-error' : 'hide-input-error'} >{fieldValidate.message}</ErrorLabel>
      </FieldWrapper>
    </FormItem>
  );
};

FormInput.propTypes = {
  background: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'textarea',
  ]),
  placeholder: PropTypes.string,
  validateType: PropTypes.string,
  defaultValue: PropTypes.string,
};

FormInput.defaultProps = {
  required: false,
  name: '',
  label: '',
  type: 'text',
  placeholder: '',
  validateType: '',
  background: '',
  defaultValue: '',
};

export default FormInput;
