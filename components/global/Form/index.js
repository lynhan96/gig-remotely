import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/global';
import {
  StyledForm, FormItem, EmptyLabel, StyledText,
} from './styles';

const Form = ({
  onSubmit,
  children,
  className,
  style,
}) => (
  <StyledForm style={style} className={className} onSubmit={onSubmit}>
    {children}
  </StyledForm>
);

Form.Item = ({ children, label, emptyLabel }) => (
  <FormItem>
    {emptyLabel && <EmptyLabel />}
    {label && <StyledText size='sm' weight='bold'>{label}</StyledText>}
    {children}
  </FormItem>
);

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
