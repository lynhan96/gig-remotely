import React, {
  useState, useEffect, createContext, useRef, useContext, useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { onGetS3Url } from 'saga/upload';
import { Input } from 'components/global';
import PropTypes from 'prop-types';

import {
  StyledForm,
  FormItem,
  StyledText,
  ErrorLabel,
  FieldWrapper,
  PhotoInputWrapper,
  PhotoWrapper,
  Image,
  Upload,
  PhotoLabel,
} from './styles';

const FormContext = createContext();

const Form = ({
  onSubmit,
  children,
  className,
  style,
  type,
}) => {
  const errorRef = useRef([]);
  const itemsRef = useRef([]);
  const valuesRef = useRef({});
  const state = {
    itemType: type,
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
      <StyledForm style={style} className={className} onSubmit={handleSubmit} type={type}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );
};

Form.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

Form.Photo = ({
  name, label, defaultValue,
}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(defaultValue);
  const { valuesRef } = useContext(FormContext);

  const getS3Url = useCallback((filename, type, callback) => dispatch(
    onGetS3Url(filename, type, callback),
  ), [dispatch]);

  const onChange = (event) => {
    const file = event.target.files[0];
    // const filename = `${Math.round((new Date()).getTime() / 1000)}-${file.name}`;
    // console.log(filename);
    // getS3Url(filename, file.type, (response) => {
    //   console.log(response);
    // });
    // let presignedUrl = await fetch(
    //   `/api/s3?filename=${filename}&type=${e[i].type}`)
    // let json = await presignedUrl.json()
    // let url = json.signedURL

    // await fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': e[i].type,
    //   },
    //   body: e[i],
    // })
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
    valuesRef.current[name] = defaultValue;
  };

  return (
    <PhotoInputWrapper>
      <PhotoWrapper>
        <Image src={image ? image : '/images/icon/upload.svg'} hasImage={image} />
      </PhotoWrapper>
      <Upload type='file' onChange={onChange} />
      <PhotoLabel>{label}</PhotoLabel>
    </PhotoInputWrapper>
  );
};

Form.Item = ({
  required, name, label, type, placeholder, validateType, background, defaultValue,
}) => {
  const [fieldValidate, setFieldValidate] = useState({ hasError: false, message: '' });
  const {
    errorRef, itemsRef, valuesRef, itemType,
  } = useContext(FormContext);
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
    <FormItem itemType={itemType}>
      {label && <StyledText size='sm' weight='bold'>{label}</StyledText>}
      <FieldWrapper hasLabel={label}>
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
        {fieldValidate.hasError && <ErrorLabel>{fieldValidate.message}</ErrorLabel>}
      </FieldWrapper>
    </FormItem>
  );
};

Form.Item.propTypes = {
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
};

Form.Item.defaultProps = {
  required: false,
  name: '',
  label: '',
  type: 'text',
  placeholder: '',
  validateType: '',
  background: '',
};

Form.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

Form.defaultProps = {
  type: 'vertical',
  style: {},
  className: '',
  children: null,
  onSubmit: null,
};

export default Form;
