import React, {
  createContext, useRef,
} from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormPhoto from './FormPhoto';
import FormSelect from './FormSelect';
import FormFileInput from './FormFileInput';
import { StyledForm } from './styles';

const FormContext = createContext();

const Form = ({
  onSubmit,
  onReset,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.all(itemsRef.current.map((validate) => validate()))
      .then(() => {
        if (errorRef.current.length === 0 && onSubmit) {
          onSubmit(valuesRef.current, event);
        }
      });
  };

  return (
    <FormContext.Provider value={state}>
      <StyledForm style={style} className={className} onSubmit={handleSubmit} type={type} onReset={onReset}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );
};

Form.Photo = ({ fieldRef, ...props }) => <FormPhoto context={FormContext} {...props} ref={fieldRef} />;
Form.Select = ({ fieldRef, ...props }) => <FormSelect context={FormContext} {...props} ref={fieldRef} />;
Form.FileInput = ({ fieldRef, ...props }) => <FormFileInput context={FormContext} {...props} ref={fieldRef} />;
Form.Item = (props) => <FormInput context={FormContext} {...props} />;

Form.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  onReset: PropTypes.func,
};

Form.defaultProps = {
  type: 'vertical',
  style: {},
  className: '',
  children: null,
  onSubmit: null,
  onReset: null,
};

export default Form;
