import React, {
  useState, useEffect, createContext, useRef, useContext,
} from 'react';
import { Input } from 'components/global';
import PropTypes from 'prop-types';

import {
  StyledForm,
  FormItem,
  EmptyLabel,
  StyledText,
  ErrorLabel,
  FieldWrapper,
} from './styles';

const FormContext = createContext();

const Form = ({
  onSubmit,
  children,
  className,
  style,
}) => {
  const errorRef = useRef([]);
  const itemsRef = useRef([]);
  const valuesRef = useRef({});
  const state = {
    errorRef,
    itemsRef,
    valuesRef,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Promise.all(itemsRef.current.map((validate) => validate()))
      .then(() => {
        if (errorRef.current.length === 0 && onSubmit) {
          onSubmit(valuesRef.current);
        }
      });
  };

  return (
    <FormContext.Provider value={state}>
      <StyledForm style={style} className={className} onSubmit={handleSubmit}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );
};

Form.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

Form.Item = ({
  required, name, label, type, placeholder, validateType,
}) => {
  const [fieldValidate, setFieldValidate] = useState({ hasError: false, message: '' });
  const { errorRef, itemsRef, valuesRef } = useContext(FormContext);
  const fieldRef = useRef();

  const executeValidate = (value) => {
    if (required && (!value || value.length === 0)) return 'This field is required.';
    if (validateType === 'email' && !Form.validateEmail(value)) return 'Invalid email';

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
    <FormItem>
      {label && <StyledText size='sm' weight='bold'>{label}</StyledText>}
      <FieldWrapper hasLabel={label}>
        <Input error={fieldValidate.hasError} type={type} placeholder={placeholder} onChange={onChange} inputRef={fieldRef} />
        {fieldValidate.hasError && <ErrorLabel>{fieldValidate.message}</ErrorLabel>}
      </FieldWrapper>
    </FormItem>
  );
};

Form.Item.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
  ]),
  placeholder: PropTypes.string,
  validateType: PropTypes.string,
};

Form.Item.defaultProps = {
  required: false,
  name: '',
  label: '',
  type: 'text',
  placeholder: '',
  validateType: '',
};

Form.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

Form.defaultProps = {
  style: {},
  className: '',
  children: null,
  onSubmit: null,
};

export default Form;
